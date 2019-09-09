import React from "react";

export interface IAdminPluginsComponentProps {
    value: number
    a11yProps: (index: number) => any
    handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void
    handleChangeIndex: (index: number) => void
}

export interface IPluginDetailsComponentProps {
    openDetailsModal: boolean
    openConfigureModal: boolean
    openUninstallModal: boolean
    handleDetailsModal: (openDetailsModal: boolean) => void
    handleConfigureModal: (openDetailsModal: boolean) => void
    handleUninstallModal: (openDetailsModal: boolean) => void
    actionButtons: Array<'install' | 'uninstall' | 'details' | 'configure' | 'activate'>
    InstallPlugin: () => void
    ActivatePlugin: () => void
}

export interface IPluginDetailButtonsProps {
    actionButtons: Array<'install' | 'uninstall' | 'details' | 'configure' | 'activate'>
    InstallPlugin: () => void
    handleDetailsModal: (openDetailsModal: boolean) => void
    handleConfigureModal: (openConfigureModal: boolean) => void
    handleUninstallModal: (openUninstallModal: boolean) => void
    ActivatePlugin: () => void
}

export interface IPluginUninstallModalProps {
    openUninstallModal: boolean
    handleUninstallModal: (openUninstallModal: boolean) => void
}

export interface IPluginConfigureModalProps {
    openConfigureModal: boolean
    handleConfigureModal: (openUninstallModal: boolean) => void
}

export interface IPluginDetailModalProps {
    openDetailsModal: boolean
    handleDetailsModal: (openUninstallModal: boolean) => void
}

export interface IPluginDetailsContainerProps {
    actionButtons: Array<'install' | 'uninstall' | 'details' | 'configure' | 'activate'>
}

// Tab Update
export interface ITabUpdateComponentProps {
    InstallPlugins: () => void
}

export interface ITabUpdateHeaderComponentProps {
    InstallPlugins: () => void
}

// Tab Search
export interface ITabSearchComponentProps {
    SyncPlugins: () => void
}

export interface ITabSearchHeaderComponentProps {
    SyncPlugins: () => void
}
