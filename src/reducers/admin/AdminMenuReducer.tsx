import React from "react";

// Material imports
import Note from '@material-ui/icons/Note';
import AccountCircle from '@material-ui/icons/AccountCircle';

//custom imports
import {ADMIN_PLUGINS, ADMIN_USERS} from "../../config/constants/routes";
import {IAdminMenuAction, IAdminMenuState} from "../../models/redux/AdminMenuModel";

const initState: IAdminMenuState = {
    menuItems: [
        {
            title: 'Plugins',
            icon: <Note />,
            url: ADMIN_PLUGINS,
        },
        {
            title: 'Users',
            icon: <AccountCircle />,
            url: ADMIN_USERS,
        }
    ]
};

const AdminMenuReducer = (state: IAdminMenuState = initState, action: IAdminMenuAction) => {

    switch (action.type) {
        default:
            return state;
    }
}

export default AdminMenuReducer;
