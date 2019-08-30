import {combineReducers} from "redux";
import {LogoutAction} from "../config/constants/actions";
import SnackBar from "../reducers/SnackBarReducer";

const appReducer = combineReducers({
    SnackBar
})

const rootReducer = (state: any, action: any) => {
    if (action.type === LogoutAction) {
        state = undefined;
    }

    return appReducer(state, action)
};

export default rootReducer;
