import React  from 'react';
import ErrorBoundary from "../common/ErrorBoudary";
import Routes from "../../Routes";

const LayoutContainer = () => {

    return (
        <ErrorBoundary>
            <Routes />
        </ErrorBoundary>
    );
};

export default LayoutContainer;
