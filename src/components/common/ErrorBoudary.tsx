import React from 'react';

interface ErrorProps {

}

interface ErrorState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
    constructor(props: ErrorProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {

        return { hasError: true };
    }

    componentDidCatch(error: any, info: any) {
        console.dir(error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1 style={{textAlign: 'center'}}>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
