import React from "react";
import TabUpdateComponent from "./TabUpdateComponent";

const TabUpdateContainer = () => {

    const InstallPlugins = () => {
        console.log('install all plugins')
    };

    const updateComponentProps = {
        InstallPlugins: InstallPlugins
    };

    return <TabUpdateComponent {...updateComponentProps} />
};

export default TabUpdateContainer;
