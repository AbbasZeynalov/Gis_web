import React from "react";

// Material imports
import Grid from '@material-ui/core/Grid';

// Custom imports
import SpringModal from "../../../../common/SpringModalComponent";
import {IPluginDetailModalProps} from "../../../../../models/admin/AdminPluginsModel";
import {Typography} from "@material-ui/core";
import {useDetailModalStyles} from "../../../../../assets/material/AdminAsset";
import Button from "@material-ui/core/Button";
import DetailTabContainer from "./tabs/DetailTabContainer";

const PluginDetailModal = React.memo((props: IPluginDetailModalProps) => {
    const classes = useDetailModalStyles();
    const {openDetailsModal, handleDetailsModal} = props;

    return (
        <SpringModal
            openModal={openDetailsModal}
            handleModal={handleDetailsModal}
            width={700}
        >
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Typography className={classes.mainText}>
                        Plugin Name: <span className={classes.mainTextSpan}>Test plugin name</span>
                    </Typography>
                    <Typography className={classes.mainText}>
                        Active version: <span className={classes.mainTextSpan}>5.1.2</span>
                    </Typography>
                </Grid>
                <Grid item xs={4} className={classes.releaseButtonWrapper}>
                    <Button
                        size="medium"
                        variant="outlined"
                        color='primary'
                        // onClick={InstallPlugins}
                    >
                        Release History
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <DetailTabContainer />
                </Grid>
            </Grid>
        </SpringModal>
    )
});

export default PluginDetailModal;
