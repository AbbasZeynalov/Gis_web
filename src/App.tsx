import React, { Component } from 'react';
import {withRouter} from 'react-router';

//custom Components
import './App.css';
import LayoutContainer from './components/layout/LayoutContainer';
import {PrivateRoute} from "./Routes";
import {ADMIN, LOGIN} from "./config/constants/routes";
import LoginComponent from "./components/auth/LoginComponent";
import SnackbarComponent from "./components/common/SnackbarComponent";
import AdminLayoutContainer from "./components/admin/layout/AdminLayoutContainer";

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
                        <PrivateRoute path={LOGIN} component={LoginComponent} />
                    </>
                :
                    this.props.location.pathname.includes(ADMIN)
                    ?
                        <PrivateRoute path={ADMIN} component={AdminLayoutContainer} />
                    :
                        <LayoutContainer />
            }
        </>
    );
  }
}

export default withRouter(App);
