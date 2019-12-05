import {ADMIN_PLUGIN_ACTION} from "../../config/constants/actions";
import {IMainReduxAction} from "../../models/redux/ReduxModel";
import {IPluginItem, IPluginsData} from "../../models/admin/AdminPluginsModel";

const initState = {
    totalCount: 0,
    items: [] as IPluginItem[]
};

const AdminPluginReducer = (state = initState, action: IMainReduxAction<IPluginsData>) => {
    switch (action.type) {
        case ADMIN_PLUGIN_ACTION:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default AdminPluginReducer;
