import React from "react";

// Material imports
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from '@material-ui/core/Grid';
import {Typography} from "@material-ui/core";

// Custom imports
import {IPluginDetailsComponentProps, IPluginVersion} from "../../../../models/admin/AdminPluginsModel";
import {usePluginDetailsAsset} from "../../../../assets/material/AdminAsset";
import PluginDetailButtons from "./PluginDetailButtons";
import PluginUninstallModal from "../modals/uninstall-modal/PluginUninstallModal";
import PluginConfigureModal from "../modals/configure-modal/PluginConfigureModal";
import PluginDetailModal from "../modals/detail-modal/PluginDetailModal";

const PluginDetailsComponent = (props: IPluginDetailsComponentProps) => {
    const classes = usePluginDetailsAsset();
    const {plugin, version, handleVersion} = props;

    const detailButtonsProps = {
        actionButtons: props.actionButtons,
        ActivatePlugin: props.ActivatePlugin,
        InstallPlugin: props.InstallPlugin,
        handleDetailsModal: props.handleDetailsModal,
        handleConfigureModal: props.handleConfigureModal,
        handleUninstallModal: props.handleUninstallModal,
    };

    return (
        <>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={6}>
                    <Typography className={classes.mainText}>
                        Plugin Name: <span className={classes.mainTextSpan}>{plugin.name}</span>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.mainText}>
                        Active version: <span className={classes.mainTextSpan}>5.1.2</span>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Select
                        value={version}
                        className={classes.selectInput}
                        onChange={handleVersion}
                    >
                        <MenuItem key={0} value='initial'>
                            Version available:
                        </MenuItem>
                        {
                            plugin.version.map((version: IPluginVersion) => (
                                <MenuItem
                                    key={version.version}
                                    value={version.version}
                                >
                                    {version.version}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </Grid>
                <Grid item xs={6}>
                    <PluginDetailButtons {...detailButtonsProps} />
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.mainText}>
                        Selected version release note: <span className={classes.mainTextSpan}> Selected version release note is...</span>
                    </Typography>
                </Grid>
            </Grid>

            <PluginUninstallModal
                openUninstallModal={props.openUninstallModal}
                handleUninstallModal={props.handleUninstallModal}
            />
            <PluginConfigureModal
                openConfigureModal={props.openConfigureModal}
                handleConfigureModal={props.handleConfigureModal}
            />
            <PluginDetailModal
                openDetailsModal={props.openDetailsModal}
                handleDetailsModal={props.handleDetailsModal}
            />
        </>
    )
};

export default PluginDetailsComponent;
