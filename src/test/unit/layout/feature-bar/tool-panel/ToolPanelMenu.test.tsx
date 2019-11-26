import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {shallow} from "enzyme";
import {toolPanelLayer, toolPanelMap} from "../../../../../config/constants/layout";
import ToolPanelMenu from "../../../../../components/layout/feature-bar/tool-panel/ToolPanelMenu";
import {IToolPanelMenu} from "../../../../../models/LayoutModel";
import { Menu, MenuItem, Checkbox } from "@material-ui/core";
import SettingsApplications from "@material-ui/core/SvgIcon/SvgIcon";

const allToolPanels = [
    {name: 'Laylar', value: toolPanelLayer},
    {name: 'Xeriteler', value: toolPanelMap},
];

const props: IToolPanelMenu = {
    toolPanels: [toolPanelLayer, toolPanelMap],
    handleToolPanels: jest.fn()
};

describe('ToolPanelMenu', () => {
    Enzyme.configure({adapter: new Adapter()});
    let wrapper: any;

    beforeEach(() => {
        wrapper = shallow(<ToolPanelMenu {...props}/>)
    });

    describe('render component elements', () => {
        it('should render SettingsApplications', function () {
            expect(wrapper.find(SettingsApplications)).toHaveLength(1)
        });

        it('should render Menu', function () {
            expect(wrapper.find(Menu)).toHaveLength(1)
        });

        it('should render MenuItem', function () {
            expect(wrapper.find(MenuItem)).toHaveLength(allToolPanels.length)
        });

        it('should render MenuItem checkboxes', function () {
            expect(wrapper.find(Checkbox)).toHaveLength(allToolPanels.length)
        });
    });

    describe('fire events', () => {
        beforeEach(() => {
           wrapper.find(SettingsApplications).simulate('onClick')
        });

        it('should open menu', function () {
            expect(wrapper.find(Menu).props().open).toBe(true)
        });

        describe('fire menu onClose event', () => {
           beforeEach(() => {
             wrapper.find(Menu).simulate('onClose')
           });

            it('should set open prop to false', function () {
                expect(wrapper.find(Menu).props().open).toBe(false)
            });
        });

        describe('onClick MenuItem', () => {
           beforeEach(() => {
               console.log('aaaaaaaaaaaaaaaa ', wrapper.find(Checkbox).at(0).props().checked)
              wrapper.find(MenuItem).at(0).simulate('onClick');
               console.log('bbbbbbbbbbbbbbbbbbbbbb ', wrapper.find(MenuItem).at(0).props().selected)
           });

            it('should set false checkbox checked prop of this MenuItem', function () {
                expect(wrapper.find(Checkbox).at(0).props().checked).toBe(false)
            });
        });
    });
});
