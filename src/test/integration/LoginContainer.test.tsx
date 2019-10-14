import React from "react";
import Enzyme from 'enzyme';
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

        const fakeData = {
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
        };

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

    it('should fail with validation error: empty username', () => {

        const {getByTestId, getByText} = wrapperContainer;

        const eventName = {target: {name: "username", value: ""}};
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

        expect(getByText('İstifadəçi adını daxil edin').textContent).toBe('İstifadəçi adını daxil edin');
    });
});
