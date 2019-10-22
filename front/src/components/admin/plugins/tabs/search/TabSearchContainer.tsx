import React, {useState} from "react";
import {connect} from "react-redux";
import TabSearchComponent from "./TabSearchComponent";
import {ITabSearchContainerProps} from "../../../../../models/admin/AdminPluginsModel";
import {syncPlugins} from "../../../../../services/admin/PluginService";
import {GetAdminPlugins} from "../../../../../actions/admin/AdminPluginAction";

const TabSearchContainer = (props: ITabSearchContainerProps) => {
    const [syncButtonDetail, setSyncButtonDetail] = useState({isLoading: false, text: 'sync now'});

    const {plugins} = props;

    const SyncPlugins = () => {
        setSyncButtonDetail({isLoading: true, text: 'sync...'});

        syncPlugins().then(res => {
           if (res.data.data.synchronizeModules.success) {
               props.GetAdminPlugins();
               setSyncButtonDetail({isLoading: false, text: 'synced'})
           }
        });
        console.log('sync plugins')
    };

    const searchComponentProps = {
        plugins: plugins,
        syncButtonDetail: syncButtonDetail,
        SyncPlugins: SyncPlugins
    };

    return <TabSearchComponent {...searchComponentProps} />
};

const mapDispatchToProps = {
    GetAdminPlugins
};

export default connect(null, mapDispatchToProps)(TabSearchContainer);
