import React, { lazy, Suspense } from 'react';

import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

// Custom imports
import {Logout} from "./actions/AuthAction";
import store from "./store";
import {ADMIN_PLUGINS, HOME, LOGIN} from "./config/constants/routes";
import LoginContainer from "./components/auth/LoginContainer";
import SnackbarComponent from "./components/common/SnackbarComponent";
const AdminPluginsContainer = lazy(() => import("./components/admin/plugins/AdminPluginsContainer"))

// @ts-ignore
export const PrivateRoute = ({ component: Component, ...rest }) => {

    const delayToken = sessionStorage.getItem('delayToken');

    if( delayToken && ( new Date( delayToken ) < new Date( ) ) ) {
        sessionStorage.clear()
        setTimeout(() => store.dispatch(Logout()), 0)
    }

    let token = sessionStorage.getItem('token');
    let auth = !!token;

    if(rest.path === LOGIN) {

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

export const AdminRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <PrivateRoute exact path={ADMIN_PLUGINS} component={AdminPluginsContainer} />
            </Switch>
        </Suspense>
    )
};

const Routes = () => {

    return (
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <PrivateRoute exact path={HOME} component={() => <div>home page</div>} />
                </Switch>
            </Suspense>
        );

};

export default Routes;
