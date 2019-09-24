import {combineReducers} from "redux";
import {LOGOUT_ACTION} from "../config/constants/actions";
import SnackBar from "../reducers/SnackBarReducer";
import AdminMenu from "./admin/AdminMenuReducer";
import Auth from "./AuthReducer";
import Plugins from "./admin/AdminPluginReducer";

const AppReducer = combineReducers({
    SnackBar,
    AdminMenu,
    Auth,
    Plugins
});

const rootReducer = (state: any, action: any) => {
    if (action.type === LOGOUT_ACTION) {
        state = undefined;
    }

    return AppReducer(state, action)
};

export default rootReducer;
