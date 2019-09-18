import {unmountComponentAtNode} from "react-dom";
import React from "react";
import {act} from "react-dom/test-utils";
import Enzyme, {mount, shallow} from 'enzyme';
import LoginComponent from "../components/auth/LoginComponent";
import {ILoginComponentProps} from "../models/AuthModel";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Adapter from 'enzyme-adapter-react-16';
import Axios from "axios";
import * as AuthService from "../services/AuthService";
import LoginContainer from "../components/auth/LoginContainer";

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import configureMockStore from 'redux-mock-store'

import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import ReduxThunk from "redux-thunk";
import {Login} from "../actions/AuthAction";
import {LOGIN_ACTION} from "../config/constants/actions";

import {fireEvent, render, wait} from '@testing-library/react'
var eventually = require('mocha-eventually')

import sinon from 'sinon';

const mockStore = configureStore([ReduxThunk]);

describe('<LoginComponent />', () => {
    Enzyme.configure({adapter: new Adapter()});

    let props: ILoginComponentProps;
    let wrapper: any;
    let wrapperContainer: any;
    let store: any;

    beforeEach(() => {
        props = {
            username: "zzz",
            password: "123",
            onChange: jest.fn(),
            onSubmit: jest.fn()
        };


        store = mockStore({
            Login: 'sample text',
        });

        store.dispatch = jest.fn();

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

    const waitt = (wrapper: any, predicate: any, timeout = 100) => {
        return new Promise((resolve, reject) => {
            if (predicate(wrapper)) {
                return resolve(true);
            }
            setTimeout(() => {
                wrapper.update();
                return predicate(wrapper) ? resolve(true) : reject(new Error('Timeout expired'));
            }, timeout);
        });
    };


    it.only('Login success', async () => {

        let fakeUser = {
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

        jest.spyOn(Axios, "post").mockImplementation(() =>
            Promise.resolve({
                data: () => Promise.resolve(fakeUser)
            })
        );

        // @ts-ignore
        // let checkShowSnackBar = jest.spyOn(global, 'checkShowSnackBar');

        // const mock = jest.fn().mockImplementation(() => {
        //     return {checkShowSnackBar: checkShowSnackBar};
        // });


        // console.log(AuthService);

        // let spyCheckShowSnackBar = jest.spyOn(AuthService, 'checkShowSnackBar');

        // console.log('xxx: ',spyCheckShowSnackBar);

        // wrapperContainer.find("input[name='username']").getDOMNode().value = "abbas";
        // wrapperContainer.find("input[name='username']").getDOMNode().value = "abbas";
        // wrapperContainer.find("input[name='password']").getDOMNode().value = "132456";

        // const {getByTestId} = wrapperContainer;
        //
        // console.log(getByTestId);
        //
        // fireEvent.change(getByTestId('username'), { target: { value: 'abbas' } })
        // fireEvent.change(getByTestId('password'), { target: { value: '123456' } })

        // expect(wrapperContainer.instance().calledOnce).toEqual(true);

        const {getByTestId, getByText, container} = wrapperContainer;


        const eventName = {target: {name: "username", value: "abbas"}};
        const eventPassword = {target: {name: "password", value: "123456"}};
        // wrapperContainer.find("input[name='username']").simulate('change', eventName);
        // wrapperContainer.find("input[name='password']").simulate('change', eventPassword);

        fireEvent.change(getByTestId('username'), eventName)
        fireEvent.change(getByTestId('password'), eventPassword)

        // console.log('iiiii: ',wrapper.instance);


        // wrapper.instance().onS

        // const mockCallBack = jest.fn();

        // const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));

        // return Promise
        //     .resolve(wrapperContainer)
        //     .then(() => wrapperContainer.find('button').simulate('click'))
        //     .then(() => {
        //         expect(spyCheckShowSnackBar).toHaveBeenCalled();
        //     });


        await wait(() => {

            fireEvent(
                getByText('Sign Inn'),
                new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                })
            );
        })

        // await wrapperContainer.find(Button).simulate('click');

// console.log('qqqqqqqqqqqqqqqqqqqqq');

        // console.log('sss: ', store.getActions());

        // return eventually(() => {
            expect(store.dispatch).toHaveBeenCalledTimes(1);

        // console.log('zzzz: ',store.getState());

        // console.log('dispatceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeh ', store.getActions())

       // console.log( getByText('Sistemə daxil oldunuz'));

            // expect(wrapperContainer.find('.client-snackbar').textContent).toBe('Sistemə daxil oldunuz');
            // expect(store.dispatch).toHaveBeenCalledWith(Login({username: 'abbas', password: '123456'}));
        // });



        // setTimeout(() => {
        // }, 0)
        //


        // done();

        // expect(wrapperContainer.find('.client-snackbar').textContent).toBe('Sistemə daxil oldunuz');

        // await wait(wrapperContainer, (w:any) => {
        //
        //     expect(spyCheckShowSnackBar).toHaveBeenCalled();
        // });


        // expect(spyCheckShowSnackBar).toHaveBeenCalled();
        // expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});
