import React  from 'react';
import ErrorBoundary from "../common/ErrorBoudary";
import Routes from "../../Routes";

const LayoutContainer = React.memo(() => {

    return (
        <ErrorBoundary>
            <Routes />
        </ErrorBoundary>
    );
});

export default LayoutContainer;
