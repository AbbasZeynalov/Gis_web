import React from "react";
import AdminDrawerComponent from "./AdminDrawerComponent";
import {IAdminDrawerComponentProps, IAdminDrawerContainerProps} from "../../../../models/admin/AdminLayoutModel";
import {SetAdminMenu} from "../../../../actions/admin/AdminMenuAction";
import {IMainReduxState} from "../../../../models/redux/ReduxModel";
import {compose} from "redux";
import {connect} from "react-redux";

const AdminDrawerContainer = React.memo((props: IAdminDrawerContainerProps) => {
    const {open, handleDrawer, menuItems} = props;

    const adminDrawerProps: IAdminDrawerComponentProps = {  // Drawer props
        open: open,
        menuItems: menuItems,
        handleDrawer: handleDrawer
    };

    return <AdminDrawerComponent {...adminDrawerProps} />
});

const mapDispatchToProps = {
    SetAdminMenu
};

const mapStateToProps = (state: IMainReduxState) => {
    return {
        menuItems: state.AdminMenu.menuItems
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(AdminDrawerContainer);
