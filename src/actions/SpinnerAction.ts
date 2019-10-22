import {Dispatch} from "redux";
import {HandleSpinner} from "../config/constants/actions";

export const handleSpinner = (active: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: HandleSpinner,
            payload: active
        })
    }
}
