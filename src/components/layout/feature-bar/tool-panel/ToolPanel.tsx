import React, {useState} from "react";

// Material imports
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {IToolPanelProps} from "../../../../models/LayoutModel";

export const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

export const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 20,
        '&$expanded': {
            minHeight: 20,
        },
    },
    content: {
        '&$expanded': {
            margin: '0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

export const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);

const ToolPanel = (props: IToolPanelProps) => {
    const [expand, setExpand] = useState(true);
    const { title, children } = props;

    const onChange = () => {
      setExpand(!expand);
    };

    return (
        <ExpansionPanel
            square
            expanded={expand}
            onChange={onChange}
        >
            <ExpansionPanelSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography>
                    <b>{ title }</b>
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                { children }
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
};

export default ToolPanel;

