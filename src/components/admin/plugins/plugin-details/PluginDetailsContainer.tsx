import React, {BaseSyntheticEvent, useState} from "react";
import PluginDetailsComponent from "./PluginDetailsComponent";
import {IPluginDetailsContainerProps} from "../../../../models/admin/AdminPluginsModel";
import Axios from "axios";

const PluginDetailsContainer = (props: IPluginDetailsContainerProps) => {
    const [openDetailsModal, setOpenDetailsModal] = useState(false);
    const [openConfigureModal, setOpenConfigureModal] = useState(false);
    const [openUninstallModal, setOpenUninstallModal] = useState(false);
    const [version, setVersion] = useState('initial');
    const [installButtonDetails, setInstallButtonDetails] = useState({isLoading: false, text: 'install'});
    const {actionButtons, plugin} = props;

    const handleDetailsModal = (openDetailsModal: boolean) => {
        setOpenDetailsModal(openDetailsModal);
    };

    const handleConfigureModal = (openConfigureModal: boolean) => {
        setOpenConfigureModal(openConfigureModal);
    };

    const handleUninstallModal = (openUninstallModal: boolean) => {
        setOpenUninstallModal(openUninstallModal);
    };

    const handleVersion = (e: BaseSyntheticEvent) => {
        const value = e.target.value;
        setVersion(value);
    };

    const InstallPlugin = () => {
        const data = {
            pluginName: plugin.name,
            gitDeployTokenUsername: plugin.git_deploy_token_username,
            gitDeployTokenPassword: plugin.git_deploy_token_password
        };

        setInstallButtonDetails(() => ({isLoading: true, text: 'installing...'}));

        console.log('data ', data)

        Axios.post('http://localhost:9000/install-plugin', {...data})
            .then(res => {
                console.log('res ', res)
                if (res.data.success) {
                    setInstallButtonDetails({isLoading: false, text: 'installed'})
                } else {
                    setInstallButtonDetails({isLoading: false, text: 'error occurred'})
                }
            });
    };

    const ActivatePlugin = () => {
        console.log('activate this Plugin')
    };

    const PluginDetailsProps = {
        plugin: plugin,
        version: version,
        installButtonDetails: installButtonDetails,
        actionButtons: actionButtons,
        openDetailsModal: openDetailsModal,
        openConfigureModal: openConfigureModal,
        openUninstallModal: openUninstallModal,
        handleDetailsModal: handleDetailsModal,
        handleConfigureModal: handleConfigureModal,
        handleUninstallModal: handleUninstallModal,
        handleVersion: handleVersion,
        InstallPlugin: InstallPlugin,
        ActivatePlugin: ActivatePlugin,
    };

    return <PluginDetailsComponent {...PluginDetailsProps} />
};

export default PluginDetailsContainer;
