import React from "react";
import Enzyme, {shallow} from "enzyme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Adapter from "enzyme-adapter-react-16";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import AdminLayoutComponent from "../../../../components/admin/layout/AdminLayoutComponent";
import AdminAppBarComponent from "../../../../components/admin/layout/app-bar/AdminAppBarComponent";
import AdminDrawerContainer from "../../../../components/admin/layout/drawer/AdminDrawerContainer";
import ErrorBoundary from "../../../../components/common/ErrorBoudary";
import {AdminRoutes} from "../../../../Routes";

describe('Render AdminLayout component', () => {
    Enzyme.configure({adapter: new Adapter()});

    let wrapper: any;
    let props: any;

    props = {
        open: true,
        handleDrawer: jest.fn(),
    };

    wrapper = shallow(<AdminLayoutComponent {...props}/>);

    it('should render correctly', () => {
        expect(wrapper.find(`[data-testid="layout-wrapper"]`)).toHaveLength(1);
        expect(wrapper.find(CssBaseline)).toHaveLength(1);
        expect(wrapper.find(AdminAppBarComponent)).toHaveLength(1);
        expect(wrapper.find(AdminDrawerContainer)).toHaveLength(1);
        expect(wrapper.find(`[data-testid="layout-main"]`)).toHaveLength(1);
        expect(wrapper.find(`[data-testid="layout-toolbar"]`)).toHaveLength(1);
        expect(wrapper.find(ErrorBoundary)).toHaveLength(1);
        expect(wrapper.find(AdminRoutes)).toHaveLength(1);
    });
});
