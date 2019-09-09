import {IAdminMenuItems} from "../admin/AdminLayoutModel";
import {IUser} from "../UserModel";

export interface IMainReduxState {
    Auth: IUser
    AdminMenu: {
        menuItems: IAdminMenuItems[]
    },
    SnackBar: {
        SnackBarFunction: (enqueueSnackbar: any) => void
    },
}

export interface IMainReduxAction<T> {
    type: string
    payload: T
}
