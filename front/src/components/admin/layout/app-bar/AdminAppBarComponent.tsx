import React from "react";
import clsx from "clsx";

// Material imports
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";

// Custom imports
import {IAdminAppBarComponentProps} from "../../../../models/admin/AdminLayoutModel";
import {useAdminAppBarStyles} from "../../../../assets/material/AdminAsset";

const AdminAppBarComponent = (props: IAdminAppBarComponentProps) => {
    const classes = useAdminAppBarStyles();
    const {handleDrawer, open} = props;

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    data-testid='open-button'
                    onClick={() => handleDrawer(true)}
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Mini variant drawer
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default AdminAppBarComponent;
