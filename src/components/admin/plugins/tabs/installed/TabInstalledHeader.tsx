import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import {createStyles, makeStyles, Theme, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searchInput: {
            margin: 0
        }
    })
);

const TabInstalledHeader = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <Typography>The following plugins are available</Typography>
            </Grid>
            <Grid item xs={2}>
                <TextField
                    label="Search..."
                    // className={classes.textField}
                    value=''
                    variant="outlined"
                    margin="dense"
                    className={classes.searchInput}
                    // onChange={handleChange('name')}
                />
            </Grid>
        </Grid>
    )
};

export default TabInstalledHeader;
