import React from "react";

interface IBarSize {
    width: number
    height: number
}

export interface IBarSizes {
    right: IBarSize
    left: IBarSize
    bottom: IBarSize
}

export interface IFeatureProps {
    bottomBarFullWidth: boolean
    barSizes: IBarSizes
    children: React.ReactElement
    position: 'left' | 'right' | 'bottom'
    onResize: (width: number, height: number, bar: 'right' | 'left' | 'bottom') => void
}

export interface IFeatureBottomProps {
    barSize: {
        width: number
        height: number
    }
    children: React.ReactElement
    position: 'left' | 'right'
    onResize: (width: number, height: number, bar: 'right' | 'left' | 'bottom') => void
}
