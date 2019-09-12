import React from "react";
import SwipeableViews from "react-swipeable-views";

// Material imports
import {useTheme} from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

// Custom imports
import {IAdminPluginsComponentProps} from "../../../models/admin/AdminPluginsModel";
import {useAdminTabsStyles} from "../../../assets/material/AdminAsset";
import AppBarTabPanelComponent from "../../common/tabpanel/AppBarTabPanelComponent";
import TabPanelComponent from "../../common/tabpanel/TabPanelComponent";
import TabUpdateContainer from "./tabs/update/TabUpdateContainer";
import TabInstalledContainer from "./tabs/installed/TabInstalledContainer";
import TabSearchContainer from "./tabs/search/TabSearchContainer";
import AppTableContainer from "../../common/tables/AppTableContainer";

const AdminPluginsComponent = React.memo((props: IAdminPluginsComponentProps) => {
    const classes = useAdminTabsStyles();
    const theme = useTheme();
    const {value, handleChange, handleChangeIndex, a11yProps} = props;

    return (
        <div className={classes.root}>
            {/* AppBar of Tab panel */}
            <AppBarTabPanelComponent
                value={value}
                handleChange={handleChange}
            >
                <Tab label="Updates (3)" {...a11yProps(0)} />
                <Tab label="Installed (6)" {...a11yProps(1)} />
                <Tab label="Search" {...a11yProps(2)} />
            </AppBarTabPanelComponent>

            {/* Body of Tab panel */}
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {
                    value === 0
                    ?
                        <TabPanelComponent value={value} index={0} dir={theme.direction}>
                            <TabUpdateContainer />
                        </TabPanelComponent>
                    :
                        <></>
                }
                {
                    value === 1
                    ?
                        <TabPanelComponent value={value} index={1} dir={theme.direction}>
                            <TabInstalledContainer />
                        </TabPanelComponent>
                    :
                        <></>
                }
                {
                    value === 2
                    ?
                        <TabPanelComponent value={value} index={2} dir={theme.direction}>
                            <TabSearchContainer />
                        </TabPanelComponent>
                    :
                        <></>
                }
            </SwipeableViews>
        </div>
    )
});

export default AdminPluginsComponent;
