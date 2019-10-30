import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import LoginComponent from "../../../components/auth/LoginComponent";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Adapter from "enzyme-adapter-react-16";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import {MemoryRouter, useHistory} from "react-router";
import * as ReactReduxHooks from "../../../utils/helpers/ReactReduxHooks";
import thunk from "redux-thunk";
import createMockStore from "redux-mock-store";

describe('Render LoginComponent', () => {
    Enzyme.configure({adapter: new Adapter()});

    let wrapper: any;
    let store: any;

    beforeEach(() => {
        let user = {
            username: 'abbasz',
            firstname: 'Abbas',
            lastname: 'Zeynalov',
            patronymic: 'Mezahir',
            email: 'abbaszeynalov070@gmail.com'
        };

        store = createMockStore([thunk])({
            Auth: user
        });

        jest
            .spyOn(ReactReduxHooks, "useCustomSelector")
            .mockImplementation(state => store.getState());

        jest
            .spyOn(ReactReduxHooks, "useCustomDispatch")
            .mockImplementation(() => jest.fn());

        jest
            .spyOn(ReactReduxHooks, "useCustomHistory")
            .mockImplementation(() => jest.fn());

        // @ts-ignore
        wrapper = shallow(<LoginComponent store={store} />);
    });

    describe('render correctly', () => {

        it('should render title form', () => {
            expect(wrapper.find(Typography).text()).toEqual('Sign in')
        });

        it('should render Link forgot password', () => {
            expect(wrapper.find(Link).text()).toEqual('Forgot password?')
        });

        it('should render button', () => {
            expect(wrapper.find(Button).text()).toEqual('Sign In')
        });

        it('should render form Textfield', () => {
            expect(wrapper.find(TextField).length).toEqual(2)
        });
    });

    describe('submit form with empty inputs', () => {
        beforeEach(() => {
           wrapper.find('form').simulate('submit', { preventDefault: jest.fn() })
        });

        it('should show username validation error', () => {
            console.log(wrapper.debug())
            // expect(wrapper.find(TextField).at(0).props().error).toBe(true)
        });
    });

    describe('validation username input', () => {
        beforeEach(() => {
            const eventUsername = {
                target: { value: 'abbas', name: 'username' },
                persist: jest.fn()
            };

            wrapper.find(TextField).at(0).simulate('change', eventUsername);
        });

        it('should full username input', () => {
            expect(wrapper.find(TextField).at(0).props().value).toEqual('abbas')
        });

        it('should hide error label', () => {
            expect(wrapper.find(TextField).at(0).props().error).toBe(false)
        });

        describe('show validation error username input', () => {
           beforeEach(() => {
               const eventUsername = {
                   target: { value: '', name: 'username' },
                   persist: jest.fn()
               };

               wrapper.find(TextField).at(0).simulate('change', eventUsername);
           });

            it('should empty username input', () => {
                expect(wrapper.find(TextField).at(0).props().value).toEqual('')
            });

            it('should show error label', () => {
                expect(wrapper.find(TextField).at(0).props().error).toBe(true)
            });
        });
    });

    describe('validation password input', () => {
        beforeEach(() => {
            const eventPassword = {
                target: { value: '123456', name: 'password' },
                persist: jest.fn()
            };

            wrapper.find(TextField).at(1).simulate('change', eventPassword);
        });

        it('should full password input', () => {
            expect(wrapper.find(TextField).at(1).props().value).toEqual('123456')
        });

        it('should hide error label', () => {
            expect(wrapper.find(TextField).at(1).props().error).toBe(false)
        });

        describe('show validation error password input', () => {
            beforeEach(() => {
                const eventUsername = {
                    target: { value: '', name: 'password' },
                    persist: jest.fn()
                };

                wrapper.find(TextField).at(0).simulate('change', eventUsername);
            });

            it('should empty password input', () => {
                expect(wrapper.find(TextField).at(1).props().value).toEqual('')
            });

            it('should show error label', () => {
                expect(wrapper.find(TextField).at(1).props().error).toBe(true)
            });
        });
    });
});
