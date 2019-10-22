import {ReactElement} from "react";

export interface IAdminLayoutComponentProps {
    open: boolean;
    handleDrawer: (isOpen: boolean) => void;
}

export interface IAdminDrawerContainerProps {
    open: boolean;
    menuItems: IAdminMenuItems[];
    handleDrawer: (isOpen: boolean) => void;
}

export interface IAdminDrawerComponentProps {
    open: boolean;
    menuItems: IAdminMenuItems[];
    handleDrawer: (isOpen: boolean) => void;
}

export interface IAdminAppBarComponentProps {
    open: boolean;
    handleDrawer: (isOpen: boolean) => void;
}

// Menu items
export interface IAdminMenuItems {
    title: string
    icon: ReactElement
    url: string
}
