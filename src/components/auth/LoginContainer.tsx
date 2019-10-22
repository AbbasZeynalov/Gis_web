import React, {BaseSyntheticEvent, MouseEvent, useState} from "react";
import {connect} from 'react-redux';

// Custom imports
import LoginComponent from "./LoginComponent";
import {ILoginComponentProps, ILoginContainerProps} from "../../models/AuthModel";
import {Login} from "../../actions/AuthAction";
import {IMainReduxState} from "../../models/redux/ReduxModel";
import {withRouter} from "react-router";
import {CheckFormValid} from "../../utils/validation/CheckFormValid";

const errMessage: { [index: string]: string } = {
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

    const onChange = (event: BaseSyntheticEvent) => {
        event.persist();
        const input = event.target.name;
        const value = event.target.value;

        setInputs(inputs => ({
            ...inputs,
            [input]: {
                value: value || '',
                error: value ? '' : errMessage[input]
            }
        }));
    };

    const onSubmit = async (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = CheckFormValid(e, formInputs, errMessage);

        if (isValid === true) {
            const loginForm = {
                username: inputs.username.value,
                password: inputs.password.value
            };

            await props.Login(loginForm)  // Login action
                .then(() => props.history.push('/'))
        } else {
            setInputs(inputs => ({...inputs, ...isValid}))
        }
    };

    const loginComponentProps: ILoginComponentProps = {
        ...inputs,
        onChange: onChange,
        onSubmit: onSubmit,
    };

    return <LoginComponent {...loginComponentProps}/>
};

const mapDispatchToProps = {
    Login
};

const mapStateToProps = (state: IMainReduxState) => {
    return {
        auth: state.Auth
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));
