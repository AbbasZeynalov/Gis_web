import {createStyles, makeStyles, Theme} from "@material-ui/core";

export const AppTableAsset = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            marginTop: theme.spacing(1),
        },
        table: {
            minWidth: 500,
        },
        tableWrapper: {
            overflowX: 'auto',
        },
    }),
);
