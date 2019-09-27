import React from "react";
import PluginDetailsComponent from "./PluginDetailsComponent";
import {IPluginDetailsContainerProps} from "../../../../models/admin/AdminPluginsModel";

const PluginDetailsContainer = (props: IPluginDetailsContainerProps) => {
    const [openDetailsModal, setOpenDetailsModal] = React.useState(false);
    const [openConfigureModal, setOpenConfigureModal] = React.useState(false);
    const [openUninstallModal, setOpenUninstallModal] = React.useState(false);
    const {actionButtons} = props;

    const handleDetailsModal = (openDetailsModal: boolean) => {
        setOpenDetailsModal(openDetailsModal);
    };

    const handleConfigureModal = (openConfigureModal: boolean) => {
        setOpenConfigureModal(openConfigureModal);
    };

    const handleUninstallModal = (openUninstallModal: boolean) => {
        setOpenUninstallModal(openUninstallModal);
    };

    const InstallPlugin = () => {
        console.log('install this plugin')
    };

    const ActivatePlugin = () => {
        console.log('activate this Plugin')
    };

    const PluginDetailsProps = {
        actionButtons: actionButtons,
        openDetailsModal: openDetailsModal,
        openConfigureModal: openConfigureModal,
        openUninstallModal: openUninstallModal,
        handleDetailsModal: handleDetailsModal,
        handleConfigureModal: handleConfigureModal,
        handleUninstallModal: handleUninstallModal,
        InstallPlugin: InstallPlugin,
        ActivatePlugin: ActivatePlugin,
    };

    return <PluginDetailsComponent {...PluginDetailsProps} />
};

export default PluginDetailsContainer;
