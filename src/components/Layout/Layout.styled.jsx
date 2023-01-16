import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
export const NavItem = styled(NavLink)`
 margin-right:20px; 
text-decoration:none;
color:white;
  &.active, :hover {
  background-color:white;
    color:blue;
  }
`;