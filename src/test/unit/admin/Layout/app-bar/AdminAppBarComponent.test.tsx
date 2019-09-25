import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AdminAppBarComponent from "../../../../../components/admin/layout/app-bar/AdminAppBarComponent";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";

describe.only('Render AdminAppBar component', () => {
    Enzyme.configure({adapter: new Adapter()});

    let wrapper: any;
    let props: any;

    props = {
        open: true,
        handleDrawer: jest.fn(),
    };

    wrapper = shallow(<AdminAppBarComponent {...props}/>);

    it('should render correctly', () => {
        expect(wrapper.find(AppBar)).toHaveLength(1);
        expect(wrapper.find(Toolbar)).toHaveLength(1);
        expect(wrapper.find(IconButton)).toHaveLength(1);
        expect(wrapper.find(MenuIcon)).toHaveLength(1);
        expect(wrapper.find(Typography)).toHaveLength(1);
    });
});
