import React, {useState} from "react";
import {Rnd} from 'react-rnd';
//@ts-ignore
import Fade from 'react-reveal/Fade';

// import Material
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import SettingsApplications from '@material-ui/icons/SettingsApplications';

// custom imports
import {useToolBarStyles} from "../../../assets/material/FeatureBar";
import {IFeatureProps} from "../../../models/LayoutModel";
import ToolPanelMenu from "./tool-panel/ToolPanelMenu";

const FeatureBarComponent = (props: IFeatureProps) => {
    const {
        children,
        position,
        barSizes,
        onResize,
        toolPanels,
        handleToolPanels,
        bottomBarFullWidth
    } = props;
    const styles = useToolBarStyles();
    const [showBar, setShowBar] = useState(true);
    const isLeft = position === 'left';
    const positionX = (position === 'right') ? (window.innerWidth - barSizes[position].width - 15) : 0;

    const hideBar = () => {
        setShowBar(false)
    };

    return (
        <Rnd
            enableUserSelectHack={false}
            position={{
                x: positionX,
                y: 0
            }}
            size={{...barSizes[position]}}
            default={{
                x: positionX,
                y: 0,
                width: barSizes[position].width,
                height: barSizes[position].height,
            }}
            minWidth={200}
            onResize={(e, dir, refToElement) => {
                onResize(refToElement.offsetWidth, refToElement.offsetHeight, position)
            }}
            disableDragging={true}
            enableResizing={{
                bottom: false,
                bottomLeft: false,
                bottomRight: false,
                left: !isLeft,
                right: isLeft,
                top: false,
                topLeft: false,
                topRight: false
            }}
        >

            <Fade
                duration={500}
                left={isLeft}
                right={!isLeft}
                when={showBar}
            >
                <div className={styles.root}>
                    <ToolPanelMenu
                        toolPanels={toolPanels}
                        handleToolPanels={handleToolPanels}
                    />

                    {
                        isLeft
                        ?
                            <ArrowLeft
                                className={`${styles.icon} ${styles.arrowIcon}`}
                                onClick={hideBar}
                            />
                        :
                            <ArrowRight
                                className={`${styles.icon} ${styles.arrowIcon}`}
                                onClick={hideBar}
                            />
                    }
                    { children }
                </div>
            </Fade>

        </Rnd>
    )
};

export default FeatureBarComponent;
