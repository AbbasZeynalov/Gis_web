import React from "react";
import ToolPanel from "./ToolPanel";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

const ToolPanelsComponent = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuItemClick = (e: any) => {
        console.log(e.target)
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <ToolPanel title='test1'>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Open Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem selected onClick={handleMenuItemClick}>
                        <Checkbox
                            checked
                            value="checkedA"
                            inputProps={{
                                'aria-label': 'primary checkbox',
                            }}
                        />
                        Profile
                    </MenuItem>
                    <MenuItem onClick={handleMenuItemClick}>My account</MenuItem>
                    <MenuItem onClick={handleMenuItemClick}>Logout</MenuItem>
                </Menu>
            </ToolPanel>
            <ToolPanel title='test2'>
                <h1>tool panel</h1>
            </ToolPanel>
        </>
    )
};

export default ToolPanelsComponent;
