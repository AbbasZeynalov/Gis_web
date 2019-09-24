import React from "react";
import clsx from "clsx";

// Material imports
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import {useTheme} from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Custom imports
import {IAdminDrawerComponentProps, IAdminMenuItems} from "../../../../models/admin/AdminLayoutModel";
import {useAdminDrawerStyles} from "../../../../assets/material/AdminAsset";
import {StyledNavLink} from "../../../common/StyledComponents";

const AdminDrawerComponent = React.memo((props: IAdminDrawerComponentProps) => {
    const classes = useAdminDrawerStyles();
    const theme = useTheme();
    const {handleDrawer, open, menuItems} = props;

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
            open={open}
        >
            <div className={classes.toolbar} data-testid='drawer-header'>
                <div className={classes.toolbarText} data-testid='drawer-header__title'>
                    Admin Panel
                </div>
                <IconButton onClick={() => handleDrawer(false)} data-testid='drawer-header__icon'>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {menuItems.map((item: IAdminMenuItems, index: number) => (
                    <StyledNavLink
                        activeClassName='menu-active'
                        aria-current='location'
                        to={item.url}
                        key={item.url}
                        color='primary'
                    >
                        <ListItem button>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    </StyledNavLink>
                ))}
            </List>
        </Drawer>
    )
});

export default AdminDrawerComponent;
