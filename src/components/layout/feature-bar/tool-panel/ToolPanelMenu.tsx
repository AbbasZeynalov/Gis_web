import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import SettingsApplications from "@material-ui/core/SvgIcon/SvgIcon";
import {useToolPanelMenu} from "../../../../assets/material/FeatureBar";
import {IToolPanelMenu} from "../../../../models/LayoutModel";
import {toolPanelLayer, toolPanelMap} from "../../../../config/constants/layout";

const allToolPanels = [
    {name: 'Laylar', value: toolPanelLayer},
    {name: 'Xeriteler', value: toolPanelMap},
];

const ToolPanelMenu = (props: IToolPanelMenu) => {
    const styles = useToolPanelMenu();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const { toolPanels, handleToolPanels } = props;

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <SettingsApplications
                onClick={handleClick}
                className={styles.icon}
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {/*{console.log(allToolPanels)}*/}
                {
                    allToolPanels.map((item) => (
                        <MenuItem
                            selected={toolPanels.includes(item.value)}
                            onClick={handleToolPanels}
                            value={item.value}
                            key={item.value}
                        >
                            <Checkbox
                                checked={toolPanels.includes(item.value)}
                                value={item.value}
                                inputProps={{
                                    'aria-label': 'primary checkbox',
                                }}
                            />
                            { item.name }
                        </MenuItem>
                    ))
                }
            </Menu>
        </>
    )
};

export default ToolPanelMenu;
