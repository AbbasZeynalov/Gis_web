import React from 'react';

// Custom imports
import {IAdminLayoutComponentProps} from "../../../models/admin/AdminLayoutModel";
import AdminLayoutComponent from "./AdminLayoutComponent";

const AdminLayoutContainer = () => {
    const [open, setOpen] = React.useState(true);  // set open state for handle drawer

    const handleDrawer = (isOpen: boolean) => {
        setOpen(isOpen);
    };

    const layoutComponentProps: IAdminLayoutComponentProps = { // Layout Props
        open: open,
        handleDrawer: handleDrawer
    }

    return <AdminLayoutComponent {...layoutComponentProps} />;
};

export default AdminLayoutContainer;
