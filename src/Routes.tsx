import React, {lazy, Suspense, useState} from 'react';

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
import {tryRequire} from "./utils/helpers/FIleHelper";


// import HelloWorld from "./components/test-pack/HelloWorld";

// import('./components/test-pack/HelloWorld').then(comp => {
//
// });

// @ts-ignore
export const PrivateRoute = ({component: Component, ...rest}) => {

    const delayToken = sessionStorage.getItem('delayToken');

    if (delayToken && (new Date(delayToken) < new Date())) {
        sessionStorage.clear()
        setTimeout(() => store.dispatch(Logout()), 0)
    }

    let user = sessionStorage.getItem('token');
    let auth = !!user;

    console.log('route ', auth)

    if (rest.path === '/login') {

        return (
            <Route {...rest} render={() => (
                auth
                    ?
                    <Redirect to={'/'}/>
                    :
                    <>
                        <SnackbarComponent/>
                        <LoginContainer/>
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
                <Route exact path='/' component={() => (<h1>test</h1>)}/>
                <Route exact path='/new' component={tryRequire('components/test-pack/HelloWorld', null) }/>
            </Switch>
        </Suspense>
    );

};

export default Routes;
