import React  from 'react';
import ErrorBoundary from "../common/ErrorBoudary";
import Routes from "../../Routes";
import FeatureBarComponent from "./feature-bar/FeatureBarComponent";

const LayoutContainer = () => {

    return (
        <ErrorBoundary>
            <FeatureBarComponent position='left'>
                <h1>left</h1>
            </FeatureBarComponent>
            <FeatureBarComponent position='right'>
                <h1>right</h1>
            </FeatureBarComponent>
            <Routes />
        </ErrorBoundary>
    );
};

export default LayoutContainer;
