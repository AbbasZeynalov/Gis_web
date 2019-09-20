import React, {BaseSyntheticEvent, MouseEvent, useEffect, useState} from "react";
import {compose} from "redux";
import { connect } from 'react-redux';

// Custom imports
import LoginComponent from "./LoginComponent";
import {ILoginComponentProps, ILoginContainerProps} from "../../models/AuthModel";
import {Login} from "../../actions/AuthAction";
import {IMainReduxState} from "../../models/redux/ReduxModel";
import {withRouter} from "react-router";

const LoginContainer = React.memo((props: ILoginContainerProps) => {

    const [inputs, setInputs] = useState({username: '', password: ''});
    const [errors, setError] = useState({username: '', password: ''})
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

        if(inputs.username.length < 5) {

            setError({
                ...errors,
                username: 'Minimal length is 5'
            })
        }
        else {
            setError({
                username: '',
                password: ''
            })

            props.Login(inputs) // Login action
        }
    };

    const loginComponentProps: ILoginComponentProps = {  // assign props to Login component
        ...inputs,
        errors,
        onChange: onChange,
        onSubmit: onSubmit,
    };

    return <LoginComponent {...loginComponentProps}/>
});

const mapDispatchToProps = {
    Login
};

const mapStateToProps = (state: IMainReduxState) => {  // add state to props

    return {
        auth: state.Auth
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));
