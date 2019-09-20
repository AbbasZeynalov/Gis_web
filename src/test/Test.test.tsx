import React from "react";
import Enzyme, {shallow} from "enzyme";
import LoginComponent from "../components/auth/LoginComponent";
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
import LoginContainer from "../components/auth/LoginContainer";

describe('<LoginComponent />', () => {
    Enzyme.configure({adapter: new Adapter()});

    let wrapper: any;
    let wrapperContainer: any;
    let props: any;

    beforeEach(() => {
        props = {
            username: "zzz",
            password: "123",
            errors: {username: '', password: ''},
            onChange: jest.fn(),
            onSubmit: jest.fn()
        };

        wrapper = shallow(<LoginComponent {...props}/>);
        wrapperContainer = shallow(<LoginContainer {...props}/>);
    });

    describe('render LoginComponent', () => {

        it('render Container', () => {
            console.log('ttt');
            expect(wrapper.find(Container)).toHaveLength(1);
        });

        it('render CssBaseline', () => {
            expect(wrapper.find(CssBaseline)).toHaveLength(1);
        });

        it('render loginBox', () => {
            expect(wrapper.find(`[data-test="loginBox"]`)).toHaveLength(1);
        });

        it('render loginForm', () => {
            expect(wrapper.find(`[data-test="loginForm"]`)).toHaveLength(1);
        });

        it('render Avatar', () => {
            expect(wrapper.find(Avatar)).toHaveLength(1);
        });

        it('render Typography', () => {
            expect(wrapper.find(Typography)).toHaveLength(1);
        });

        it('render FormControlLabel', () => {
            expect(wrapper.find(FormControlLabel)).toHaveLength(1);
        });

        it('render Grid', () => {
            expect(wrapper.find(Grid)).toHaveLength(2);
        });

        it('render Link', () => {
            expect(wrapper.find(Link)).toHaveLength(1);
        });

        it('render Button', () => {
            expect(wrapper.find(Button)).toHaveLength(1);
        });

        it('render TextField', () => {
            expect(wrapper.find(TextField)).toHaveLength(2);
        });

        it('click submit button', function () {
            // const mockCallBack = jest.fn();
            // const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
            //
            // button.simulate('click');
            //
            // expect(mockCallBack.mock.calls.length).toEqual(1);

            // const eventUserName = {target: {name: "username", value: "abbas"}, persist: jest.fn()};
            // const eventPassword = {target: {name: "password", value: "123456"}, persist: jest.fn()};

            const mockEvent = {preventDefault: jest.fn()}

            // wrapperContainer.instance().onSubmit(mockEvent);

            // expect(eventUserName.persist).toHaveBeenCalled();
        });

        it('onChange event', () => {
            // const setState = jest.fn();
            // const useStateSpy = jest.spyOn(React, 'useState');
            // useStateSpy.mockImplementation((init: any) => [init, setState]);

            // wrapper.find(Button).props().onClick();

        })
    })
});
