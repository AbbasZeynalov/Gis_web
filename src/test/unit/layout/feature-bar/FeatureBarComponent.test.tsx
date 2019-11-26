import React from "react";
import Enzyme, {shallow} from "enzyme";
import FeatureBarComponent from "../../../../components/layout/feature-bar/FeatureBarComponent";
import {IFeatureProps} from "../../../../models/LayoutModel";
import Adapter from "enzyme-adapter-react-16";

const props: IFeatureProps = {
    barSizes: {
        right: {width: 400, height: 300},
        left: {width: 400, height: 300},
        bottom: {width: screen.width - 830, height: 200}
    },
    onResize: jest.fn(),
    handleToolPanels: jest.fn(),
    position: 'left',
    toolPanels: ['test'],
    children: <h1>test</h1>,
    bottomBarFullWidth: false
};

describe('FeatureBarComponent', () => {
    Enzyme.configure({adapter: new Adapter()});

    describe('render component elements', () => {
        let wrapper: any;

        beforeEach(() => {
            wrapper = shallow(<FeatureBarComponent {...props} />)
        });

        it('should render Rnd', () => {
            expect(wrapper.find('Rnd')).toHaveLength(1)
        });

        it('should render bar wrapper', () => {
            expect(wrapper.find('Fade div')).toHaveLength(1)
        });

        it('should render bar setting icon', () => {
            expect(wrapper.find('pure(SettingsApplicationsIcon)')).toHaveLength(1)
        });
    });

    describe('Left Bar', () => {
        let wrapperLeftBar: any;
        const propsLeftBar: IFeatureProps = {
            barSizes: {
                right: {width: 400, height: 300},
                left: {width: 400, height: 300},
                bottom: {width: screen.width - 830, height: 200}
            },
            toolPanels: ['test'],
            onResize: jest.fn(),
            handleToolPanels: jest.fn(),
            position: 'left',
            children: <h1>test</h1>,
            bottomBarFullWidth: false
        };

        beforeEach(() => {
            wrapperLeftBar = shallow(<FeatureBarComponent {...propsLeftBar} />)
        });

        it('should render left icon', () => {
            expect(wrapperLeftBar.find('pure(ArrowLeftIcon)').length).toEqual(1);
        });

        it('should Fade to left', () => {
            expect(wrapperLeftBar.find('Fade').props().left).toBe(true);
            expect(wrapperLeftBar.find('Fade').props().right).toBe(false);
        });

        describe('click ArrowLeftIcon', () => {
           beforeEach(() =>{
               wrapperLeftBar.find('pure(ArrowLeftIcon)').simulate('click');
           });

            it('should hide left bar', () => {
                expect(wrapperLeftBar.find('Fade').props().when).toBe(false)
            });
        });
    });

    describe('Right Bar', () => {
        let wrapperRightBar: any;
        const propsRightBar: IFeatureProps = {
            barSizes: {
                right: {width: 400, height: 300},
                left: {width: 400, height: 300},
                bottom: {width: screen.width - 830, height: 200}
            },
            toolPanels: ['test'],
            onResize: jest.fn(),
            handleToolPanels: jest.fn(),
            position: 'right',
            children: <h1>test</h1>,
            bottomBarFullWidth: false
        };

        beforeEach(() => {
            wrapperRightBar = shallow(<FeatureBarComponent {...propsRightBar} />)
        });

        it('should render right icon', function () {
            expect(wrapperRightBar.find('pure(ArrowRightIcon)').length).toEqual(1);
        });

        it('should Fade to right', () => {
            expect(wrapperRightBar.find('Fade').props().right).toBe(true);
            expect(wrapperRightBar.find('Fade').props().left).toBe(false);
        });

        describe('click ArrowRightIcon', () => {
            beforeEach(() =>{
                wrapperRightBar.find('pure(ArrowRightIcon)').simulate('click');
            });

            it('should hide right bar', () => {
                expect(wrapperRightBar.find('Fade').props().when).toBe(false)
            });
        });
    });
});
