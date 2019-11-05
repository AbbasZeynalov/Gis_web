import React, {useState} from 'react';
import ErrorBoundary from "../common/ErrorBoudary";
import Routes from "../../Routes";
import FeatureBarComponent from "./feature-bar/FeatureBarComponent";
import FeatureBarBottomComponent from "./feature-bar/FeatureBarBottomComponent";
import {IBarSizes} from "../../models/LayoutModel";
import {useCalculateBarSizes} from "../../hooks/UseCalculateBarSizes";

const LayoutContainer = () => {
    const screen = window.screen;
    const barHeight = screen.height - 180;

    const [barSizes, setBarSizes] = useState({
        right: {width: 400, height: barHeight},
        left: {width: 400, height: barHeight},
        bottom: {width: screen.width - 830, height: 200}
    });

    const onResize = (width: number, height: number, bar: 'right' | 'left' | 'bottom') => {
        const data = useCalculateBarSizes(width, height, bar, barSizes);
        setBarSizes({...data});
    };

    return (
        <ErrorBoundary>
            <FeatureBarComponent
                position='left'
                barSizes={barSizes}
                onResize={onResize}
            >
                <h1>left</h1>
            </FeatureBarComponent>
            <FeatureBarBottomComponent
                position='bottom'
                barSizes={barSizes}
                onResize={onResize}
            >
                <h1>Bottom</h1>
            </FeatureBarBottomComponent>
            <FeatureBarComponent
                position='right'
                barSizes={barSizes}
                onResize={onResize}
            >
                <h1>right</h1>
            </FeatureBarComponent>
            <Routes />
        </ErrorBoundary>
    );
};

export default LayoutContainer;
