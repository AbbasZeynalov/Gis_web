import {IAdminMenuItems} from "../admin/AdminLayoutModel";

export interface IAdminMenuAction {
    type: string
}

export interface IAdminMenuState {
    menuItems: IAdminMenuItems[]
}
