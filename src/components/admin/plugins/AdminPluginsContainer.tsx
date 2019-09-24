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

const AdminPluginsContainer = React.memo((props: any) => {
    const [value, setValue] = React.useState(0);

    useEffect(() => {  // get plugins details
       props.GetAdminPlugins();
    }, []);

    function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
        setValue(newValue);
    }

    function handleChangeIndex(index: number) {
        setValue(index);
    }

    const adminPluginsComponentProps = {  // Admin plugins component's props
        value: value,
        a11yProps: a11yProps,
        handleChange: handleChange,
        handleChangeIndex: handleChangeIndex
    };

    return <AdminPluginsComponent {...adminPluginsComponentProps} />;
});

const mapDispatchToProps = {
    GetAdminPlugins
};

const mapStateToProps = (state: IMainReduxState) => {
console.log('stateeeeeeeeeeee ', state)
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPluginsContainer);
