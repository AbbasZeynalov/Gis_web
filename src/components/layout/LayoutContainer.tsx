import React, {useState} from 'react';
import ErrorBoundary from "../common/ErrorBoudary";
import Routes from "../../Routes";
import FeatureBarComponent from "./feature-bar/FeatureBarComponent";
import FeatureBarBottomComponent from "./feature-bar/FeatureBarBottomComponent";
import {useCalculateBarSizes} from "../../hooks/UseCalculateBarSizes";
import ToolPanelsComponent from "./feature-bar/tool-panel/ToolPanelsComponent";
import {removeValueArray} from "../../utils/helpers/ArrayHelper";

const LayoutContainer = () => {
    const bottomBarFullWidth = false;
    const width = window.innerWidth - 15;
    const height = window.innerHeight;
    const bottomBarHeight = 200;
    const barHeight = bottomBarFullWidth ? (height - bottomBarHeight - 30) : (height - 20);
    const bottomBarWidth = bottomBarFullWidth ? width : (width - 820);

    const [barSizes, setBarSizes] = useState({
        right: {width: 400, height: barHeight},
        left: {width: 400, height: barHeight},
        bottom: {width: bottomBarWidth, height: bottomBarHeight}
    });
    const [toolPanels, setToolPanels] = useState([] as string[]);

    const handleToolPanels = (value: string) => {
        const arr = [...toolPanels];

        if (!toolPanels.includes(value)) {
            arr.push(value);
            setToolPanels(arr)
        } else {
            const newArr = removeValueArray(arr, value);
            setToolPanels(newArr)
        }
    };
    console.log(toolPanels);

    const onResize = (width: number, height: number, bar: 'right' | 'left' | 'bottom') => {
        const data = useCalculateBarSizes(width, height, bar, barSizes, bottomBarFullWidth);
        setBarSizes({...data});
    };

    return (
        <ErrorBoundary>
            <FeatureBarComponent
                toolPanels={toolPanels}
                position='left'
                barSizes={barSizes}
                handleToolPanels={handleToolPanels}
                onResize={onResize}
                bottomBarFullWidth={bottomBarFullWidth}
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
                handleToolPanels={handleToolPanels}
                toolPanels={toolPanels}
                position='right'
                barSizes={barSizes}
                onResize={onResize}
                bottomBarFullWidth={bottomBarFullWidth}
            >
                <ToolPanelsComponent />
            </FeatureBarComponent>
            <Routes />
        </ErrorBoundary>
    );
};

export default LayoutContainer;
