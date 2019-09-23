import React from "react";
import Enzyme, {shallow} from "enzyme";
import LoginComponent from "../../components/auth/LoginComponent";
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

describe('Render Login component', () => {
    Enzyme.configure({adapter: new Adapter()});

    let wrapper: any;
    let props: any;

    props = {
        username: "zzz",
        password: "123",
        errors: {username: '', password: ''},
        onChange: jest.fn(),
        onSubmit: jest.fn()
    };

    wrapper = shallow(<LoginComponent {...props}/>);

    it('should render correctly', () => {
        expect(wrapper.find(Container)).toHaveLength(1);
        expect(wrapper.find(CssBaseline)).toHaveLength(1);
        expect(wrapper.find(`[data-test="loginBox"]`)).toHaveLength(1);
        expect(wrapper.find(`[data-test="loginForm"]`)).toHaveLength(1);
        expect(wrapper.find(Avatar)).toHaveLength(1);
        expect(wrapper.find(Typography)).toHaveLength(1);
        expect(wrapper.find(FormControlLabel)).toHaveLength(1);
        expect(wrapper.find(Grid)).toHaveLength(2);
        expect(wrapper.find(Link)).toHaveLength(1);
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find(TextField)).toHaveLength(2);
    });
});
