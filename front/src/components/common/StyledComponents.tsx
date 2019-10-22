import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

// Material imports
import {ListItem} from "@material-ui/core";

// Custom imports
import {HoverColor, MainColor, TextDark} from "../../config/constants/Assets";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${TextDark}
`;

export const StyledListItem = styled(ListItem)`
    border-radius: 5px;
    &:hover {
        background-color: ${HoverColor};   
        width: 95%;
    }
   
    &:focus {
        background-color: ${MainColor} !important
    }
`;
