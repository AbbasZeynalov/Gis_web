import React from "react";
import TabSearchComponent from "./TabSearchComponent";

const TabSearchContainer = React.memo(() => {

    const SyncPlugins = () => {
        console.log('sync plugins')
    };

    const searchComponentProps = {
        SyncPlugins: SyncPlugins
    };

    return <TabSearchComponent {...searchComponentProps} />
});

export default TabSearchContainer;
