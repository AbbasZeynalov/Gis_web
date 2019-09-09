import React from "react";

// Material imports
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar/AppBar";

// Custom imports
import {IAppBarTabPanel} from "../../../models/TabPanelModel";

const AppBarTabPanelComponent = React.memo((props: IAppBarTabPanel) => {
    const {value, handleChange, children} = props;

    return (
        <AppBar position="static" color="default">
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                {children}
            </Tabs>
        </AppBar>
    )
});

export default AppBarTabPanelComponent;
