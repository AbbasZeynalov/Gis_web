import {Dispatch} from "redux";
import {ADMIN_PLUGIN_ACTION} from "../../config/constants/actions";

export const GetAdminPlugins = () => {
    return (dispatch: Dispatch) => {

        console.log('heeeeeeeeeee ')
        dispatch({
            type: ADMIN_PLUGIN_ACTION
        })
    }
};
