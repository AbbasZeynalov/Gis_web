import React, {BaseSyntheticEvent, MouseEvent, useState} from "react";

// Custom imports
import LoginComponent from "./LoginComponent";
import {ILoginComponentProps} from "../../models/AuthModel";
import {login} from "../../services/AuthQuery";

const LoginContainer = () => {

    const [inputs, setInputs] = useState({username: '', password: ''});

    const onChange = (event: BaseSyntheticEvent) => {  // Handle inputs change
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    const onSubmit = (e: MouseEvent<HTMLElement>) => {  // Handle form submit
        e.preventDefault();

        console.log('submitted')

        login(inputs)
    };

    const loginComponentProps: ILoginComponentProps = {  // assign props to Login component
        ...inputs,
        onChange: onChange,
        onSubmit: onSubmit,
    };

console.log(inputs)
    return <LoginComponent {...loginComponentProps}/>
}

export default LoginContainer;
