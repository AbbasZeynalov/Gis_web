import React from "react";
import Enzyme, {mount, shallow} from 'enzyme';
import LoginComponent from "../components/auth/LoginComponent";
import {ILoginComponentProps} from "../models/AuthModel";
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

import LoginContainer from "../components/auth/LoginContainer";
import main, {checkShowSnackBar} from "../services/AuthService";

import {Provider} from 'react-redux';

import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {applyMiddleware, createStore} from "redux";

import {fireEvent, render, wait, waitForElement} from '@testing-library/react'
import thunk from "redux-thunk";
import AuthReducer, {initState} from "../reducers/AuthReducer";
import {IResponse} from "../models/HttpModel";
import HttpClient from "../config/api/HttpClient";


const store = createStore(AuthReducer, initState, applyMiddleware(thunk));

describe('<LoginComponent />', () => {
    Enzyme.configure({adapter: new Adapter()});

    let props: ILoginComponentProps;
    let wrapper: any;
    let wrapperContainer: any;

    beforeEach(() => {
        props = {
            username: "zzz",
            password: "123",
            onChange: jest.fn(),
            onSubmit: jest.fn()
        };

        // store.dispatch = jest.fn();

        const history = createMemoryHistory()

        wrapper = shallow(<LoginComponent {...props}/>);
        wrapperContainer = render(
            <Provider store={store}>
                <Router history={history}>
                    <LoginContainer/>
                </Router>
            </Provider>
        );
    })

    it('render children', () => {

        expect(wrapper.find(Container)).toHaveLength(1);
        expect(wrapper.find(CssBaseline)).toHaveLength(1);
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('form')).toHaveLength(1);
        expect(wrapper.find(Avatar)).toHaveLength(1);
        expect(wrapper.find(Typography)).toHaveLength(1);
        expect(wrapper.find(TextField)).toHaveLength(2);
        expect(wrapper.find(FormControlLabel)).toHaveLength(1);
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find(Grid)).toHaveLength(2);
        expect(wrapper.find(Link)).toHaveLength(1);
    });


    it.only('Login success', async () => {

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
});
