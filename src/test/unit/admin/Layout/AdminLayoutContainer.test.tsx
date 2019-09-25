import React from "react";
import AdminLayoutContainer from "../../../../components/admin/layout/AdminLayoutContainer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import AdminMenu, {initState} from "../../../../reducers/admin/AdminMenuReducer";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const store = createStore(AdminMenu, initState, applyMiddleware(thunk));

console.log('storeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ', store.getState())

describe('AdminLayoutContainer', () => {
    Enzyme.configure({adapter: new Adapter()});
    let wrapperContainer: any;

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    // @ts-ignore
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        wrapperContainer = mount(
            <Provider store={store}>
                <AdminLayoutContainer />
            </Provider>
        );
    });

    it('should open drawer', function () {
        console.log(wrapperContainer)

    });
});
