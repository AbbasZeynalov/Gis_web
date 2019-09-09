import React from "react";

export interface IAdminPluginsComponentProps {
    value: number
    a11yProps: (index: number) => any
    handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void
    handleChangeIndex: (index: number) => void
}
