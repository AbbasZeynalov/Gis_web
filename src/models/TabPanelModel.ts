import React from "react";

export interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

export interface IAppBarTabPanel {
    value: number
    children: any
    handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void
}

export interface ISwipeableViewsTabPanel {
    value: number
    children: any
    handleChangeIndex: (index: number) => void
}

