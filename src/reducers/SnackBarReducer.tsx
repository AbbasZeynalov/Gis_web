import {SnackBarFunction} from "../config/constants/actions";

const initState: any = {
    SnackBarFunction: function () {}
};

const SnackBar = (state: any = initState, action: any) => {
    let { payload } = action;

    switch (action.type) {
        case SnackBarFunction:
            return {
                SnackBarFunction: payload
            };
        default:
            return state;
    }
};

export default SnackBar;
