import {makeStyles} from "@material-ui/core";

export const useToolBarStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        position: 'relative',
        border: '1px solid #E5E5E5',
        boxShadow: '1px 1px 1px 1px #ccc',
        backgroundColor: 'white'
    },
    iconWrapper: {
        width: 30,
        height: 30,
        backgroundColor: '#E5E5E5',
        position: 'absolute',
        right: 3,
    },
    icon: {
        zIndex: 9,
        width: 30,
        height: 30,
        backgroundColor: '#c0c0c0',
        position: 'absolute',
        right: 3,
        cursor: 'pointer',
        borderBottomRightRadius: theme.spacing(1),
        borderBottomLeftRadius: theme.spacing(1)
    },
    arrowIcon: {
        right: 3
    },
    settingIcon: {
        right: 38
    }
}));

export const useToolPanelMenu = makeStyles(theme => ({
    icon: {
        zIndex: 9,
        width: 30,
        height: 30,
        backgroundColor: '#c0c0c0',
        position: 'absolute',
        cursor: 'pointer',
        borderBottomRightRadius: theme.spacing(1),
        borderBottomLeftRadius: theme.spacing(1),
        right: 38
    }
}));


