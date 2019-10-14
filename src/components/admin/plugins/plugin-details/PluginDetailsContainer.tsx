import React, {BaseSyntheticEvent, useState} from "react";
import PluginDetailsComponent from "./PluginDetailsComponent";
import {IPluginDetailsContainerProps} from "../../../../models/admin/AdminPluginsModel";
import HttpClient from "../../../../config/api/HttpClient";

const PluginDetailsContainer = (props: IPluginDetailsContainerProps) => {
    const [openDetailsModal, setOpenDetailsModal] = useState(false);
    const [openConfigureModal, setOpenConfigureModal] = useState(false);
    const [openUninstallModal, setOpenUninstallModal] = useState(false);
    const [version, setVersion] = useState('initial');
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
        HttpClient.post('http://localhost:8080/install-plugin')
        console.log('install this plugin', plugin)
    };

    const ActivatePlugin = () => {
        console.log('activate this Plugin')
    };

    const PluginDetailsProps = {
        plugin: plugin,
        version: version,
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
