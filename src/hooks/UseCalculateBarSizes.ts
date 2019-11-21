import {IBarSizes} from "../models/LayoutModel";

export const useCalculateBarSizes = (width: number,
                                     height: number,
                                     bar: 'right' | 'left' | 'bottom',
                                     barSizes: IBarSizes,
                                     bottomBarFullWidth: boolean) => {
    let data;
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    if (bottomBarFullWidth) {
        if (bar === 'right') {
            data = {
                right: {width, height},
                left: {...barSizes.left},
                bottom: {...barSizes.bottom}
            }
        } else if (bar === 'left') {
            data = {
                right: {...barSizes.right},
                left: {width, height},
                bottom: {...barSizes.bottom}
            }
        } else if (bar === 'bottom') {
            const sideBarHeight = screenHeight - barSizes.bottom.height - 30;

            data = {
                right: {width: barSizes.right.width, height: sideBarHeight},
                left: {width: barSizes.left.width, height: sideBarHeight},
                bottom: {width, height}
            }
        }
    } else {
        if (bar === 'right') {
            const bottomWidth = screenWidth - width - barSizes.left.width - 30;

            data = {
                right: {width, height},
                left: {...barSizes.left},
                bottom: {width: bottomWidth, height: barSizes.bottom.height}
            }
        } else if (bar === 'left') {
            const bottomWidth = screenWidth - barSizes.right.width - width - 30;

            data = {
                right: {...barSizes.right},
                left: {width, height},
                bottom: {width: bottomWidth, height: barSizes.bottom.height}
            }
        } else if (bar === 'bottom') {
            data = {
                right: {...barSizes.right},
                left: {...barSizes.left},
                bottom: {width, height}
            }
        }
    }

    return data as IBarSizes;
};
