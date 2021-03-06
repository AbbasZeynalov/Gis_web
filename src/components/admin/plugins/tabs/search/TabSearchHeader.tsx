import React from "react";

// Material imports
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// Custom imports
import {ITabSearchHeaderComponentProps} from "../../../../../models/admin/AdminPluginsModel";

const TabSearchHeader = (props: ITabSearchHeaderComponentProps) => {
    const {syncButtonDetail, SyncPlugins} = props;

    return (
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <span>Last sync date: 24.12.1993</span>
            </Grid>
            <Grid item xs={2}>
                <Button
                    size="medium"
                    variant="outlined"
                    color='primary'
                    style={{float: 'right'}}
                    onClick={SyncPlugins}
                    disabled={syncButtonDetail.isLoading}
                >
                    { syncButtonDetail.text }
                </Button>
            </Grid>
        </Grid>
    )
};

export default TabSearchHeader;
