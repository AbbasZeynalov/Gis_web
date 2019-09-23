import React from "react";
import Enzyme, { shallow} from 'enzyme';
import LoginComponent from "../../components/auth/LoginComponent";
import {ILoginComponentProps} from "../../models/AuthModel";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Adapter from 'enzyme-adapter-react-16';

import LoginContainer from "../../components/auth/LoginContainer";
import main from "../../services/AuthService";

import {Provider} from 'react-redux';

import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {applyMiddleware, createStore} from "redux";

import {fireEvent, render, wait, cleanup } from '@testing-library/react'
import thunk from "redux-thunk";
import AuthReducer, {initState} from "../../reducers/AuthReducer";
import HttpClient from "../../config/api/HttpClient";


const store = createStore(AuthReducer, initState, applyMiddleware(thunk));

describe('<LoginComponent />', () => {
    Enzyme.configure({adapter: new Adapter()});

    let wrapper: any;
    let wrapperContainer: any;

    beforeEach(() => {


        const history = createMemoryHistory()

        wrapperContainer = render(
            <Provider store={store}>
                <Router history={history}>
                    <LoginContainer/>
                </Router>
            </Provider>
        );
    });

    afterEach(cleanup);

    it('Login success', async () => {

        let fakeData = {
            status: 200,
            data: {
                data: {
                    login: {
                        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY4Nzg1NzE3LCJleHAiOjE1NzEzNzc3MTd9.PIYlJrrYN3Xga23DYAZnxmVcS5hV3pw8d6gPvlwlOkA",
                        email: "admin@admin.com",
                        firstname: "test",
                        id: "1",
                        lastname: "test",
                        patronymic: "",
                        username: "abbas"
                    }
                }
            }
        }

        jest.spyOn(HttpClient, "post").mockImplementation(() =>
            Promise.resolve(fakeData)
        );

        const {getByTestId, getByText} = wrapperContainer;

        const eventName = {target: {name: "username", value: "cavid"}};
        const eventPassword = {target: {name: "password", value: "123123"}};

        fireEvent.change(getByTestId('username'), eventName)
        fireEvent.change(getByTestId('password'), eventPassword)


        fireEvent(
            getByText('Sign Inn'),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        const spySnack = jest.spyOn(main, 'checkShowSnackBar');

        await wait(() => {
            expect(spySnack).toHaveBeenCalled();

            expect(spySnack).toHaveBeenCalledWith(200, 'Sistemə daxil oldunuz');
        });

    }, 30000);

    it('should fail with validation error: minimal username length', () => {

        const {getByTestId, getByText} = wrapperContainer;

        const eventName = {target: {name: "username", value: "cavi"}};
        const eventPassword = {target: {name: "password", value: "123123"}};

        fireEvent.change(getByTestId('username'), eventName)
        fireEvent.change(getByTestId('password'), eventPassword)

        fireEvent(
            getByText('Sign Inn'),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(getByText('Minimal length is 5').textContent).toBe('Minimal length is 5');
    });
});
