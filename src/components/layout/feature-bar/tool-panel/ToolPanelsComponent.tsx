import React from "react";
import ToolPanel from "./ToolPanel";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import {toolPanelLayer, toolPanelMap} from "../../../../config/constants/layout";

interface IToolPanelsComponentProps {
    toolPanels: string[]
}

const ToolPanelsComponent = (props: IToolPanelsComponentProps) => {
    const { toolPanels } = props;

    return (
        <>
            {toolPanels.includes(toolPanelLayer) && (
                <ToolPanel title='Laylar'>
                    laylar
                </ToolPanel>
            )}

            {toolPanels.includes(toolPanelMap) && (
                <ToolPanel title='Xeriteler'>
                    xeriteler
                </ToolPanel>
            )}
        </>
    )
};

export default ToolPanelsComponent;
