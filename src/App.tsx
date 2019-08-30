import React, { Component } from 'react';
import {withRouter} from 'react-router';

// Material imports


//custom Components
import './App.css';
import LayoutContainer from './components/layout/LayoutContainer';
import {PrivateRoute} from "./Routes";
import {LOGIN} from "./config/constants/routes";
import LoginContainer from "./components/auth/LoginContainer";
import SnackbarComponent from "./components/common/SnackbarComponent";

interface AppProps {
    location: any
    history: any
    match: any
}

class App extends Component<AppProps,{}> {

    render() {

    return (
        <>
            {
                this.props.location.pathname == LOGIN
                ?
                    <>
                        <SnackbarComponent />
                        <PrivateRoute path={LOGIN} component={LoginContainer} />
                    </>
                :
                    <LayoutContainer />
            }
        </>
    );
  }
}

export default withRouter(App);
