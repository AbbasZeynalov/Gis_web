import {Dispatch} from "redux";
import {ADMIN_PLUGIN_ACTION} from "../../config/constants/actions";
import {getPlugins} from "../../services/admin/PluginService";
import {IResponse} from "../../models/HttpModel";

export const GetAdminPlugins = (offset: number = 0, limit: number = 0) => {
    return async (dispatch: Dispatch) => {

        return getPlugins(offset, limit).then((res: IResponse) => {
            if (!res.errors) {
                dispatch({
                    type: ADMIN_PLUGIN_ACTION,
                    payload: res.data.data.modules
                });
            }
        });
    }
};
