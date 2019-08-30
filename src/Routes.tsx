import React, { lazy, Suspense } from 'react';

import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

// Custom imports
import {Logout} from "./actions/AuthAction";
import store from "./store";
import {LOGIN} from "./config/constants/routes";
import LoginContainer from "./components/auth/LoginContainer";
import SnackbarComponent from "./components/common/SnackbarComponent";

// @ts-ignore
export const PrivateRoute = ({ component: Component, ...rest }) => {

    const delayToken = sessionStorage.getItem('delayToken');

    if( delayToken && ( new Date( delayToken ) < new Date( ) ) ) {
        sessionStorage.clear()
        setTimeout(() => store.dispatch(Logout()), 0)
    }

    let user = sessionStorage.getItem('token');
    let auth = !!user;

    console.log('route ', auth)

    if(rest.path === '/login') {

        return (
            <Route {...rest} render={() => (
                auth
                ?
                    <Redirect to={'/'}/>
                :
                    <>
                        <SnackbarComponent />
                        <LoginContainer />
                    </>
            )}/>
        );
    } else {
        return (
            <Route {...rest} render={(props: any) => (
                auth
                ?
                    <Component {...props} />
                :
                    <Redirect to={LOGIN}/>
            )}/>
        )
    }
};

const Routes = () => {

    return (
            <Suspense fallback={<div>Yüklənir...</div>}>
                <Switch>

                </Switch>
            </Suspense>
        );

}

export default Routes;
