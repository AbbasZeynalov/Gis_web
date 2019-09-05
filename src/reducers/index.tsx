import {combineReducers} from "redux";
import {LOGOUT_ACTION} from "../config/constants/actions";
import SnackBar from "../reducers/SnackBarReducer";
import AdminMenu from "./admin/AdminMenuReducer";
import Auth from "./AuthReducer";

const AppReducer = combineReducers({
    SnackBar,
    AdminMenu,
    Auth
});

const rootReducer = (state: any, action: any) => {
    if (action.type === LOGOUT_ACTION) {
        state = undefined;
    }

    return AppReducer(state, action)
};

export default rootReducer;
