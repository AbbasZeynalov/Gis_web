import React, {BaseSyntheticEvent, MouseEvent, useState} from "react";
import { connect } from 'react-redux';

// Custom imports
import LoginComponent from "./LoginComponent";
import {ILoginComponentProps, ILoginContainerProps} from "../../models/AuthModel";
import {Login} from "../../actions/AuthAction";

const LoginContainer = (props: ILoginContainerProps) => {

    const [inputs, setInputs] = useState({username: '', password: ''});

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
}

const mapDispatchToProps = {  // add dispatch actions to props
    Login
}

export default  connect(null, mapDispatchToProps)(LoginContainer);
