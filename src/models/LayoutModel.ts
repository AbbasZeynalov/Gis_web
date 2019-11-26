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

export interface IToolPanelMenu {
    toolPanels: string[]
    handleToolPanels: (e: any) => void
}

export interface IFeatureProps {
    toolPanels: string[]
    barSizes: IBarSizes
    children: React.ReactElement
    position: 'left' | 'right' | 'bottom'
    bottomBarFullWidth: boolean
    onResize: (width: number, height: number, bar: 'right' | 'left' | 'bottom') => void
    handleToolPanels: (e: any) => void
}

export interface IFeatureBottomBarProps {
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

export interface IToolPanelProps {
    title: string,
    children: React.ReactNode
}
