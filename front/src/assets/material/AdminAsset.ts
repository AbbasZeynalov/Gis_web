import {createStyles, makeStyles, Theme} from "@material-ui/core";
import {TextDark} from "../../config/constants/Assets";

const drawerWidth = 240;

export const useAdminLayoutStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

// @ts-ignore
export const useAdminAppBarStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1 + ' !important',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px) !important`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
}));

export const useAdminDrawerStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    toolbarText: {
        width: '100%',
        fontSize: 20,
        marginLeft: theme.spacing(1.2),
        color: TextDark
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
}));

export const useAdminTabsStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
}));

// Plugins
export const usePluginDetailsAsset = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: '15px 0px'
        },
        selectInput: {
            width: '100%'
        },
        mainText: {
            fontWeight: 'bold'
        },
        mainTextSpan: {
            fontWeight: 'normal'
        }
    }),
);

export const usePluginDetailButtonsStyle = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            marginRight: theme.spacing(1)
        },
    }),
);

export const useUninstallModalStyles = makeStyles((theme: Theme) =>
    createStyles({
        modalTitle: {
            textAlign: 'center',
            padding: '15px 0px 30px 0px'
        },
        modalButtons: {
            marginRight: 10
        },
        modalButtonsWrapper: {
            marginBottom: 15
        }
    }),
);

export const useConfigureModalStyles = makeStyles((theme: Theme) =>
    createStyles({
        modalTitle: {
            textAlign: 'center',
            padding: '5px 0px 15px 0px'
        },
        modalIcon: {
            cursor: 'pointer',
            float: 'right'
        },
        modalButtons: {
            marginRight: 10
        },
        modalButtonsWrapper: {
            textAlign: 'right'
        }
    }),
);

export const useDetailModalStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainText: {
            fontWeight: 'bold'
        },
        mainTextSpan: {
            fontWeight: 'normal'
        },
        releaseButtonWrapper: {
            textAlign: 'right',
            marginTop: 6
        }
    }),
);

export const useDetailModalTabStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        overflowY: 'auto',
        height: 300,
        width: '100%',
    },
}));

export const useDetailModalTabContentStyles = makeStyles((theme: Theme) => ({
    contentWrapper: {
      border: '1px solid #d0d0d0',
      marginBottom: 5,
      padding: 10
    },
    mainText: {
        fontWeight: 'bold'
    },
    mainTextSpan: {
        fontWeight: 'normal'
    }
}));
