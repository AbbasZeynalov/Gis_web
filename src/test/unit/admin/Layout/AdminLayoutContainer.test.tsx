import React from "react";
import AdminLayoutContainer from "../../../../components/admin/layout/AdminLayoutContainer";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe('AdminLayoutContainer', () => {
    Enzyme.configure({adapter: new Adapter()});
    let wrapperContainer: any;

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    // @ts-ignore
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        wrapperContainer = shallow(<AdminLayoutContainer />);
    });

    it('should open drawer', function () {
        console.log(wrapperContainer)

    });
});
