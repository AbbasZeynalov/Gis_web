import {IAdminMenuItems} from "../admin/AdminLayoutModel";

export interface IMainReduxState {
    AdminMenu: {
        menuItems: IAdminMenuItems[]
    },
    SnackBar: {
        SnackBarFunction: (enqueueSnackbar: any) => void
    },
}
