import {Dispatch} from "redux";
import {LogoutAction} from "../config/constants/actions";

export const Login = (login: any) => {
    return (dispatch: Dispatch) => {

    }
}

export const Logout = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: LogoutAction
        })
    }
}
