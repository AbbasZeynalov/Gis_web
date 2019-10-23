import React from "react";

export interface IAdminPluginsComponentProps {
    value: number
    plugins: IPluginsData
    a11yProps: (index: number) => any
    handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void
    handleChangeIndex: (index: number) => void
}

export interface IButtonDetails {
    isLoading: boolean
    text: string
}

export interface IPluginDetailsComponentProps {
    plugin: IPluginItem
    version: string
    installButtonDetails: IButtonDetails
    openDetailsModal: boolean
    openConfigureModal: boolean
    openUninstallModal: boolean
    handleDetailsModal: (openDetailsModal: boolean) => void
    handleConfigureModal: (openDetailsModal: boolean) => void
    handleUninstallModal: (openDetailsModal: boolean) => void
    handleVersion: (e: any) => void
    actionButtons: Array<'install' | 'uninstall' | 'details' | 'configure' | 'activate'>
    InstallPlugin: () => void
    ActivatePlugin: () => void
}

export interface IPluginDetailButtonsProps {
    installButtonDetails: IButtonDetails
    actionButtons: Array<'install' | 'uninstall' | 'details' | 'configure' | 'activate'>
    InstallPlugin: () => void
    handleDetailsModal: (openDetailsModal: boolean) => void
    handleConfigureModal: (openConfigureModal: boolean) => void
    handleUninstallModal: (openUninstallModal: boolean) => void
    ActivatePlugin: () => void
}

// Plugin Modals
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
    plugin: IPluginItem
}

export interface IDetailTabComponentProps {
    value: number
    a11yProps: (index: number) => any
    handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void
    handleChangeIndex: (index: number) => void
}

// Tab Update
export interface ITabUpdateComponentProps {
    InstallPlugins: () => void
}

export interface ITabUpdateHeaderComponentProps {
    InstallPlugins: () => void
}

// Tab Search
export interface ITabSearchContainerProps {
    plugins: IPluginsData
    GetAdminPlugins: (offset?: number, limit?: number) => any
}

export interface ITabSearchComponentProps {
    SyncPlugins: () => void
    syncButtonDetail: IButtonDetails
    plugins: IPluginsData
}

export interface ITabSearchHeaderComponentProps {
    syncButtonDetail: IButtonDetails
    SyncPlugins: () => void
}

// Plugins Data
export interface IPluginsData {
    totalCount: number
    items: IPluginItem[]
}

export interface IPluginItem {
    name: string
    url: string
    git_deploy_token_username: string
    git_deploy_token_password: string
    version: IPluginVersion[]
}

export interface IPluginVersion {
    version: string
}
