import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {ITabUpdateHeaderComponentProps} from "../../../../../models/admin/AdminPluginsModel";

const TabUpdateHeader = React.memo((props: ITabUpdateHeaderComponentProps) => {
    const {InstallPlugins} = props;

    return (
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <span>The following updates are available</span>
            </Grid>
            <Grid item xs={2}>
                <Button
                    size="medium"
                    variant="outlined"
                    color='primary'
                    style={{float: 'right'}}
                    onClick={InstallPlugins}
                >
                    Install all
                </Button>
            </Grid>
        </Grid>
    )
});

export default TabUpdateHeader;
