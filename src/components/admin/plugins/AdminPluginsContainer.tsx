import React from "react";

// Custom imports
import AdminPluginsComponent from './AdminPluginsComponent'


function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const AdminPluginsContainer = React.memo(() => {

    const [value, setValue] = React.useState(0);

    function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
        setValue(newValue);
    }

    function handleChangeIndex(index: number) {
        setValue(index);
    }

    const adminPluginsComponentProps = {  // Admin plugins component's props
        value: value,
        a11yProps: a11yProps,
        handleChange: handleChange,
        handleChangeIndex: handleChangeIndex
    };

    return <AdminPluginsComponent {...adminPluginsComponentProps} />;
});

export default AdminPluginsContainer;
