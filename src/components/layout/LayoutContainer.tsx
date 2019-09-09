import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import Axios from "axios";
import Routes from "../../Routes";
import HttpClient from "../../config/api/HttpClient";

class LayoutContainer extends Component {


    render(): React.ReactNode {

        return (
            <>
                <h1>hello world</h1>
                <button onClick={() => HttpClient.post('/install').then(res => console.log(res))}>click to download </button>

                <Routes/>
            </>
        );
    }
}

export default LayoutContainer;
