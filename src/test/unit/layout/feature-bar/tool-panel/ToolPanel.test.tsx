import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {IToolPanelProps} from "../../../../../models/LayoutModel";
import ToolPanel, {
    ExpansionPanel, ExpansionPanelDetails,
    ExpansionPanelSummary
} from "../../../../../components/layout/feature-bar/tool-panel/ToolPanel";

const props: IToolPanelProps = {
    title: 'test',
    children: <h1>test</h1>
};

describe('ToolPanel', () => {
    Enzyme.configure({adapter: new Adapter()});

    let wrapper: any;

    beforeEach(() => {
        wrapper = shallow(<ToolPanel {...props}></ToolPanel>);
    });

    describe('render component elements', () => {
        it('should render ExpansionPanel', () => {
            expect(wrapper.find(ExpansionPanel)).toHaveLength(1);
        });

        it('should render ExpansionPanelSummary', () => {
            expect(wrapper.find(ExpansionPanelSummary)).toHaveLength(1);
        });

        it('should render ExpansionPanelDetails', () => {
            expect(wrapper.find(ExpansionPanelDetails)).toHaveLength(1);
        });

        it('should render children', () => {
            expect(wrapper.find(ExpansionPanelDetails).children()).toHaveLength(1);
        });

        it('should render ExpansionPanel title', () => {
            expect(wrapper.find('b').text()).toEqual(props.title);
        });
    });
    
    describe('simulate onChange ExpansionPanel component', () => {
       beforeEach(() => {
           wrapper.find(ExpansionPanel).simulate('change');
       });

        it('should squeeze ExpansionPanel component', function () {
            expect(wrapper.find(ExpansionPanel).props().expanded).toBe(false)
        });
    });
});
