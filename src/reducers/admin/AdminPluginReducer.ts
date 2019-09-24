import {IAdminMenuAction} from "../../models/redux/AdminMenuReduxModel";
import {ADMIN_PLUGIN_ACTION} from "../../config/constants/actions";

const initState = {
    modules: ['bbbb']
};

const AdminPluginReducer = (state = initState, action: IAdminMenuAction) => {

    switch (action.type) {
        case ADMIN_PLUGIN_ACTION:
            return {
                modules: ['test']
            };
        default:
            return state;
    }
}

export default AdminPluginReducer;
