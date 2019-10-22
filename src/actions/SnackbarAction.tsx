import {Dispatch} from "redux";
import {SnackBarFunction} from "../config/constants/actions";

export const SetSnackBar = ( variant: string, text: string) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'SET_SNACK_BAR'
        })
    }
}

export const SetSnackBarFunction = (enqueueSnackbar: any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: SnackBarFunction,
            payload: enqueueSnackbar
        })
    }
}
