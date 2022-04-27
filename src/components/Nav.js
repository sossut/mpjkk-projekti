import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Home</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/search" activeStyle>
            Write A Review
          </NavLink>
          <NavLink to="/profile" activeStyle>
            My Profile
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Sign In / Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
