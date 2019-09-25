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

const errMessage: {[index: string]: string} = {
    username: 'İstifadəçi adını daxil edin',
    password: 'Şifrəni daxil edin',
};

const formInputs = ['username', 'password'];

const LoginContainer = React.memo((props: ILoginContainerProps) => {
    const [inputs, setInputs] = useState({username: '', password: ''});
    const [errors, setError] = useState({username: '', password: ''});

    const onChange = (event: BaseSyntheticEvent) => {  // Handle inputs change
        event.persist();
        let input = event.target.name;
        let value = event.target.value;

        setInputs(inputs => ({...inputs, [input]: value || ''})); // set input value
        setError(errors => ({ ...errors, [input]: !value ? errMessage[input] : ''}));  // set input error
    };

    const onSubmit = async (e: MouseEvent<HTMLFormElement>) => {  // Handle form submit
        e.preventDefault();
        const isValid = CheckFormValid(e, formInputs, errMessage);

        if (isValid === true) {
            await props.Login(inputs)  // Login action
                .then(() => props.history.push('/'))
        } else {
            setError(errors => ({ ...errors, ...isValid}))
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
