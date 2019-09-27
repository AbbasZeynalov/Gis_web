import React from "react";
import SpringModal from "../../../../common/SpringModalComponent";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useUninstallModalStyles} from "../../../../../assets/material/AdminAsset";
import {IPluginUninstallModalProps} from "../../../../../models/admin/AdminPluginsModel";

const PluginUninstallModal = (props: IPluginUninstallModalProps) => {
    const classes = useUninstallModalStyles();
    const {openUninstallModal, handleUninstallModal} = props;

    return (
        <SpringModal
            openModal={openUninstallModal}
            handleModal={handleUninstallModal}
        >
            <Typography color='primary' className={classes.modalTitle}>
                Please choose what to do:
            </Typography>
            <div className={classes.modalButtonsWrapper}>
                <Button
                    size="medium"
                    variant="outlined"
                    color='primary'
                    className={classes.modalButtons}
                    // onClick={InstallPlugins}
                >
                    Uninstall plugin
                </Button>
                <Button
                    size="medium"
                    variant="outlined"
                    color='primary'
                    className={classes.modalButtons}
                    // onClick={InstallPlugins}
                >
                    Uninstall selected version
                </Button>
                <Button
                    size="medium"
                    variant="outlined"
                    color='primary'
                    onClick={() => handleUninstallModal(false)}
                >
                    Cancel
                </Button>
            </div>
        </SpringModal>
    )
};

export default PluginUninstallModal;
