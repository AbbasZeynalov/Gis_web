import React, {BaseSyntheticEvent, MouseEvent, useEffect, useState} from "react";
import {compose} from "redux";
import { connect } from 'react-redux';

// Custom imports
import LoginComponent from "./LoginComponent";
import {ILoginComponentProps, ILoginContainerProps} from "../../models/AuthModel";
import {Login} from "../../actions/AuthAction";
import {IMainReduxState} from "../../models/redux/ReduxModel";
import {withRouter} from "react-router";
import {HOME} from "../../config/constants/routes";

const LoginContainer = React.memo((props: ILoginContainerProps) => {

    const [inputs, setInputs] = useState({username: '', password: ''});
    let token = props.Auth && props.Auth.access_token;

    // useEffect(() => {
    //     //@ts-ignore
    //     token && props.location.push('/')
    // },[token]);

    const onChange = (event: BaseSyntheticEvent) => {  // Handle inputs change
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    const onSubmit = (e: MouseEvent<HTMLElement>) => {  // Handle form submit
        e.preventDefault();

        props.Login(inputs) // Login action
    };

    const loginComponentProps: ILoginComponentProps = {  // assign props to Login component
        ...inputs,
        onChange: onChange,
        onSubmit: onSubmit,
    };

    return <LoginComponent {...loginComponentProps}/>
});

const mapDispatchToProps = {  // add dispatch actions to props
    Login
};

const mapStateToProps = (state: IMainReduxState) => {  // add state to props

    return {
        auth: state.Auth
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));
