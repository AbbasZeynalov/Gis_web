import React from "react";

// Custom imports
import DetailTabComponent from './DetailTabComponent'


function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const DetailTabContainer = React.memo(() => {

    const [value, setValue] = React.useState(0);

    function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
        setValue(newValue);
    }

    function handleChangeIndex(index: number) {
        setValue(index);
    }

    const tabComponentProps = {  // Admin plugins component's props
        value: value,
        a11yProps: a11yProps,
        handleChange: handleChange,
        handleChangeIndex: handleChangeIndex
    };

    return <DetailTabComponent {...tabComponentProps} />;
});

export default DetailTabContainer;
