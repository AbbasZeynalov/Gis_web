import {Dispatch} from "redux";
import {LOGIN_ACTION, LOGOUT_ACTION} from "../config/constants/actions";
import {LoginService} from "../services/AuthService";
import {ILoginForm} from "../models/AuthModel";
import {IResponse} from "../models/HttpModel";

export const Login = (loginForm: ILoginForm) => {

    return async (dispatch: Dispatch): Promise<any> => {
        return await LoginService(loginForm).then((res: IResponse) => {
            if (!res.errors) {
                const user = res.data.data.login;

                sessionStorage.setItem('token', JSON.stringify(user.access_token));
                sessionStorage.setItem('delayToken', new Date(new Date().getTime() + 9*60*60*1000).toISOString()); // set auth delay

                dispatch({
                    type: LOGIN_ACTION,
                    payload: user
                });
            }
        })
    }
};

export const Logout = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: LOGOUT_ACTION
        })
    }
};
