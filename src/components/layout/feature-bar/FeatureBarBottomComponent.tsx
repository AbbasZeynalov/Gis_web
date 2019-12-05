import React, {useState} from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";
import {Rnd} from "react-rnd";
import {useToolBarStyles} from "../../../assets/material/FeatureBar";
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import {IFeatureBottomBarProps, IFeatureProps} from "../../../models/LayoutModel";

const FeatureBarBottomComponent = (props: IFeatureBottomBarProps) => {
    const [showBar, setShowBar] = useState(true);
    const styles = useToolBarStyles();
    const { children, position, barSizes, onResize, bottomBarFullWidth } = props;
    const positionX = bottomBarFullWidth ? 0 : barSizes.left.width + 10;
    const positionY = window.innerHeight - barSizes.bottom.height - 20;

    const hideBar = () => {
        setShowBar(false)
    };

    return (
        <Rnd
            enableUserSelectHack={false}
            position={{
                x: positionX,
                y: positionY
            }}
            size={{...barSizes[position]}}
            default={{
                x: positionX,
                y: 0,
                width: barSizes[position].width,
                height: barSizes[position].height,
            }}
            minWidth={200}
            minHeight={200}
            onResize={(e, dir, refToElement) => {
                onResize(refToElement.offsetWidth, refToElement.offsetHeight, position)
            }}
            disableDragging={true}
            enableResizing={{
                bottom: false,
                bottomLeft: false,
                bottomRight: false,
                left: false,
                right: false,
                top: true,
                topLeft: false,
                topRight: false
            }}
        >

            <Fade
                duration={500}
                when={showBar}
                bottom={true}
            >
                <div className={styles.root}>
                    <ArrowLeft
                        className={`${styles.icon} ${styles.arrowIcon}`}
                        onClick={hideBar}
                    />
                    { children }
                </div>
            </Fade>

        </Rnd>
    )
};

export default FeatureBarBottomComponent;
