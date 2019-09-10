import React from "react";
import {Typography} from "@material-ui/core";
import SpringModal from "../../../../common/SpringModalComponent";
import {IPluginConfigureModalProps} from "../../../../../models/admin/AdminPluginsModel";
import {useConfigureModalStyles} from "../../../../../assets/material/AdminAsset";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Clear from "@material-ui/icons/Clear"
import {Link} from "react-router-dom";

const PluginConfigureModal = React.memo((props: IPluginConfigureModalProps) => {
    const classes = useConfigureModalStyles();
    const {openConfigureModal, handleConfigureModal} = props;

    return (
        <SpringModal
            openModal={openConfigureModal}
            handleModal={handleConfigureModal}
            width={450}
        >
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography className={classes.modalTitle}>
                        JSON based configuration editor
                        <Clear
                            onClick={() => handleConfigureModal(false)}
                            className={classes.modalIcon}
                        />
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.modalTitle}>
                        <Link to='https://material.io/resources/icons/?style=baseline'>
                            https://material.io/resources/icons/?style=baseline
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                    <div className={classes.modalButtonsWrapper}>
                        <Button
                            size="medium"
                            variant="outlined"
                            color='primary'
                            className={classes.modalButtons}
                            // onClick={InstallPlugins}
                        >
                            Reset
                        </Button>
                        <Button
                            size="medium"
                            variant="outlined"
                            color='primary'
                            // onClick={() => handleUninstallModal(false)}
                        >
                            Apply
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </SpringModal>
    )
});

export default PluginConfigureModal;
