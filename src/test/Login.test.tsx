import {render, unmountComponentAtNode} from "react-dom";
import React from "react";
import {act} from "react-dom/test-utils";
import Enzyme, { shallow } from 'enzyme';
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

describe('<LoginComponent />', () => {
    Enzyme.configure({ adapter: new Adapter() });

    let props:ILoginComponentProps = {
        username: "zzz",
        password: "123",
        onChange: jest.fn(),
        onSubmit: jest.fn()
    };

    it('render <LoginComponent />', () => {

        const wrapper = shallow(<LoginComponent {...props}/>);

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
})
