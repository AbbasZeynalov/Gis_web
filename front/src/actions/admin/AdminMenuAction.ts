import {Dispatch} from "redux";
import {ADMIN_MENU_ACTION} from "../../config/constants/actions";

export const SetAdminMenu = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ADMIN_MENU_ACTION
        })
    }
}
