import React, {Component} from 'react';
import {connect} from "react-redux";

// Material imports
import {withSnackbar } from 'notistack';
import {SetSnackBarFunction} from "../../actions/SnackbarAction";

class SnackbarComponent extends Component<any, any> {

    componentDidMount(): void {
        this.props.SetSnackBarFunction(this.props.enqueueSnackbar)
    }

    render(): React.ReactNode {
        return <></>;
    }
}

const mapDispatchToProps = {
    SetSnackBarFunction
};

const mapStateToProps = (state: any) => {
    return {
        SnackBarFunction: state.SnackBar.SnackBarFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(SnackbarComponent))
