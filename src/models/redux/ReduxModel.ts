import {IAdminMenuItems} from "../admin/AdminLayoutModel";
import {IUser} from "../UserModel";
import {IPluginsData} from "../admin/AdminPluginsModel";

export interface IMainReduxState {
    Auth: IUser
    AdminMenu: {
        menuItems: IAdminMenuItems[]
    },
    SnackBar: {
        SnackBarFunction: (enqueueSnackbar: any) => void
    },
    Plugins: IPluginsData
}

export interface IMainReduxAction<T> {
    type: string
    payload: T
}
