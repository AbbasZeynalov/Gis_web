import React from "react";
import TabSearchComponent from "./TabSearchComponent";
import {ITabSearchContainerProps} from "../../../../../models/admin/AdminPluginsModel";

const TabSearchContainer = (props: ITabSearchContainerProps) => {

    const {plugins} = props;

    const SyncPlugins = () => {
        console.log('sync plugins')
    };

    const searchComponentProps = {
        SyncPlugins: SyncPlugins,
        plugins: plugins
    };

    return <TabSearchComponent {...searchComponentProps} />
};

export default TabSearchContainer;
