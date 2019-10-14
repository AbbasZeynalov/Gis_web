import React, {useEffect} from "react";
import {connect} from "react-redux";

// Custom imports
import AdminPluginsComponent from './AdminPluginsComponent';
import {GetAdminPlugins} from '../../../actions/admin/AdminPluginAction';
import {IMainReduxState} from "../../../models/redux/ReduxModel";

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const AdminPluginsContainer = (props: any) => {
    const [value, setValue] = React.useState(0);

    useEffect(() => {  // get plugins details
       props.GetAdminPlugins(0, 0);
    }, []);

    function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
        setValue(newValue);
    }

    function handleChangeIndex(index: number) {
        setValue(index);
    }

    const adminPluginsComponentProps = {
        value: value,
        plugins: props.plugins,
        a11yProps: a11yProps,
        handleChange: handleChange,
        handleChangeIndex: handleChangeIndex
    };

    console.log('plugins', props.plugins)

    return <AdminPluginsComponent {...adminPluginsComponentProps} />;
};

const mapDispatchToProps = {
    GetAdminPlugins
};

const mapStateToProps = (state: IMainReduxState) => {
    return {
        plugins: state.Plugins
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPluginsContainer);
