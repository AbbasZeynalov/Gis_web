import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {cleanup, render, fireEvent} from "@testing-library/react";
import AdminLayoutContainer from "../../../../components/admin/layout/AdminLayoutContainer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import AdminMenuReducer, {initState} from "../../../../reducers/admin/AdminMenuReducer";

const store = createStore(AdminMenuReducer, initState, applyMiddleware(thunk));

describe.only('AdminLayoutContainer', () => {
    Enzyme.configure({adapter: new Adapter()});
    let wrapperContainer: any;

    beforeEach(() => {
        wrapperContainer = render(
            <Provider store={store}>
                <AdminLayoutContainer />
            </Provider>
        );
    });

    afterEach(cleanup);

    it('should open drawer', function () {
        console.log(wrapperContainer)
        // const { getByTestId } = wrapperContainer;

        // fireEvent(
        //     getByTestId('open-button'),
        //     new MouseEvent('click', {
        //         bubbles: true,
        //         cancelable: true,
        //     })
        // );

        // wrapperContainer.debug();

    });

});
