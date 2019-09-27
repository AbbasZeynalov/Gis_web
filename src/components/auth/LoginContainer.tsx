import React, {BaseSyntheticEvent, MouseEvent, useEffect, useState} from "react";
import {compose} from "redux";
import { connect } from 'react-redux';

// Custom imports
import LoginComponent from "./LoginComponent";
import {ILoginComponentProps, ILoginContainerProps} from "../../models/AuthModel";
import {Login} from "../../actions/AuthAction";
import {IMainReduxState} from "../../models/redux/ReduxModel";
import {withRouter} from "react-router";
import {CheckFormValid} from "../../utils/validation/CheckFormValid";
import {on} from "cluster";

const errMessage: {[index: string]: string} = {
    username: 'İstifadəçi adını daxil edin',
    password: 'Şifrəni daxil edin',
};

const formInputs = ['username', 'password'];

const LoginContainer = (props: ILoginContainerProps) => {
    const [inputs, setInputs] = useState({
        username: {
            value: '',
            error: ''
        },
        password: {
            value: '',
            error: ''
        }
    });

    const onChange = (event: BaseSyntheticEvent) => {  // Handle inputs change
            event.persist();
            let input = event.target.name;
            let value = event.target.value;

            setInputs(inputs => ({  // set input value
                ...inputs,
                [input]: {
                    value: value || '',
                    error: value ? '' : errMessage[input]
                }
            }));

            console.log('heeeeeeeeeeeeeeeee ')

    };

    const onSubmit = async (e: MouseEvent<HTMLFormElement>) => {  // Handle form submit
        e.preventDefault();
        const isValid = CheckFormValid(e, formInputs, errMessage);

        if (isValid === true) {
            let loginForm = {
                username: inputs.username.value,
                password: inputs.password.value
            };

            await props.Login(loginForm)  // Login action
                .then(() => props.history.push('/'))
        } else {
            setInputs(inputs => ({ ...inputs, ...isValid}))
        }
    };

    const loginComponentProps: ILoginComponentProps = {  // assign props to Login component
        ...inputs,
        onChange: onChange,
        onSubmit: onSubmit,
    };

    return <LoginComponent {...loginComponentProps}/>
};

const mapDispatchToProps = {
    Login
};

const mapStateToProps = (state: IMainReduxState) => {  // add state to props
    return {
        auth: state.Auth
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));
