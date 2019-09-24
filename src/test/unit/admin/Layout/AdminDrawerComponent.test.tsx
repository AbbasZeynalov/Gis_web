import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Note from "@material-ui/core/SvgIcon/SvgIcon";
import {ADMIN_PLUGINS} from "../../../../config/constants/routes";
import AdminDrawerComponent from "../../../../components/admin/layout/drawer/AdminDrawerComponent";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {StyledNavLink} from "../../../../components/common/StyledComponents";

describe('Render AdminDrawer component', () => {
    Enzyme.configure({adapter: new Adapter()});

    let wrapper: any;
    let props: any;

    props = {
        open: true,
        menuItems: [
            {
                title: 'Plugins',
                icon: <Note />,
                url: ADMIN_PLUGINS,
            }
        ],
        handleDrawer: jest.fn(),
    };

    wrapper = shallow(<AdminDrawerComponent {...props}/>);

    it('should render correctly', () => {
        expect(wrapper.find(Drawer)).toHaveLength(1);
        expect(wrapper.find(`[data-testid="drawer-header"]`)).toHaveLength(1);
        expect(wrapper.find(`[data-testid="drawer-header__title"]`)).toHaveLength(1);
        expect(wrapper.find(`[data-testid="drawer-header__icon"]`)).toHaveLength(1);
        expect(wrapper.find(Divider)).toHaveLength(1);
        expect(wrapper.find(List)).toHaveLength(1);
        expect(wrapper.find(StyledNavLink)).toHaveLength(1);
        expect(wrapper.find(ListItem)).toHaveLength(1);
        expect(wrapper.find(ListItemIcon)).toHaveLength(1);
        expect(wrapper.find(ListItemText)).toHaveLength(1);
    });
});
