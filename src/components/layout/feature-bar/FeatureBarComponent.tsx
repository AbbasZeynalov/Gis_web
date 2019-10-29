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

const FeatureBarComponent = (props: IFeatureProps) => {
    const [barSize, setBarSize] = useState({width: 400});
    const [showBar, setShowBar] = useState(true);
    const styles = useToolBarStyles();
    const { children, position } = props;
    const positionX = (position === 'right') ? (window.screen.width - barSize.width - 10) : 0;
    const isLeft = position === 'left';

    const onResize = (width: number) => {
        setBarSize({width})
    };

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
            default={{
                x: positionX,
                y: 0,
                width: barSize.width,
                height: '80%',
            }}
            minWidth={200}
            onResize={(e, dir, refToElement) => onResize(refToElement.offsetWidth)}
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
                    <SettingsApplications
                        className={`${styles.icon} ${styles.settingIcon}`}
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
