import {Dispatch} from "redux";
import {LOGIN_ACTION, LOGOUT_ACTION} from "../config/constants/actions";
import {LoginService} from "../services/AuthService";
import {ILoginForm} from "../models/AuthModel";
import {IResponse} from "../models/HttpModel";

export const Login = (loginForm: ILoginForm) => {

    return (dispatch: Dispatch) => {
        console.log('action')
        LoginService(loginForm).then((res: IResponse) => {
            if (!res.errors) {
                dispatch({
                    type: LOGIN_ACTION,
                    payload: res.data.login
                })
            }
        })
    }
}

export const Logout = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: LOGOUT_ACTION
        })
    }
}
