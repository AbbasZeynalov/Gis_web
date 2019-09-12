import React from "react";
import {Typography} from "@material-ui/core";
import {useDetailModalTabContentStyles} from "../../../../../../../assets/material/AdminAsset";

interface IDetailTabContentComponentProps {
    data: any
}

const DetailTabContentComponent = React.memo((props: IDetailTabContentComponentProps) => {
    const classes = useDetailModalTabContentStyles();
    const {data} = props;

    return data.map((item: any, i: number) => (
        <div key={i} className={classes.contentWrapper}>
            <Typography className={classes.mainText}>
                Element Name: <span className={classes.mainTextSpan}>{item.name}</span>
            </Typography>
            <Typography className={classes.mainText}>
                Description: <span className={classes.mainTextSpan}>{item.description}</span>
            </Typography>
        </div>
    ))
});

export default DetailTabContentComponent;
