import React, {useState} from 'react';
import ErrorBoundary from "../common/ErrorBoudary";
import Routes from "../../Routes";
import FeatureBarComponent from "./feature-bar/FeatureBarComponent";
import FeatureBarBottomComponent from "./feature-bar/FeatureBarBottomComponent";
import {useCalculateBarSizes} from "../../hooks/UseCalculateBarSizes";
import ToolPanelsComponent from "./feature-bar/tool-panel/ToolPanelsComponent";

const LayoutContainer = () => {
    const bottomBarFullWidth = true;
    const width = window.screen.width - 10;
    const height = window.screen.height;
    const bottomBarHeight = 200;
    const barHeight = bottomBarFullWidth ? (height - bottomBarHeight - 190) : (height - 180);

    const bottomBarWidth = bottomBarFullWidth ? width : (width - 820);

    const [barSizes, setBarSizes] = useState({
        right: {width: 400, height: barHeight},
        left: {width: 400, height: barHeight},
        bottom: {width: bottomBarWidth, height: bottomBarHeight}
    });

    const onResize = (width: number, height: number, bar: 'right' | 'left' | 'bottom') => {
        const data = useCalculateBarSizes(width, height, bar, barSizes, bottomBarFullWidth);
        setBarSizes({...data});
    };

    return (
        <ErrorBoundary>
            <FeatureBarComponent
                position='left'
                barSizes={barSizes}
                bottomBarFullWidth={bottomBarFullWidth}
                onResize={onResize}
            >
                <ToolPanelsComponent />
            </FeatureBarComponent>
            <FeatureBarBottomComponent
                position='bottom'
                barSizes={barSizes}
                bottomBarFullWidth={bottomBarFullWidth}
                onResize={onResize}
            >
                <h1>Bottom</h1>
            </FeatureBarBottomComponent>
            <FeatureBarComponent
                position='right'
                barSizes={barSizes}
                bottomBarFullWidth={bottomBarFullWidth}
                onResize={onResize}
            >
                <ToolPanelsComponent />
            </FeatureBarComponent>
            <Routes />
        </ErrorBoundary>
    );
};

export default LayoutContainer;
