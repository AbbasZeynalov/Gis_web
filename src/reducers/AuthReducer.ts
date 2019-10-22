import {LOGIN_ACTION} from "../config/constants/actions";
import {IAuthReduxState} from "../models/redux/AuthReduxModel";
import {IMainReduxAction} from "../models/redux/ReduxModel";
import {IUser} from "../models/UserModel";

export const initState: IAuthReduxState = {
    user: {
        username: '',
        firstname: '',
        lastname: '',
        patronymic: '',
        email: '',
        access_token: '',
        userPermissions: []
    }
};

const AuthReducer = (state: IAuthReduxState = initState, action: IMainReduxAction<IUser>) => {
    const { payload } = action;

    switch (action.type) {
        case LOGIN_ACTION:
            return {
                ...state,
                user: payload
            };
        default:
            return state;
    }
};

export default AuthReducer;
