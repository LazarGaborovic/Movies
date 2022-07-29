import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar className="container-fluid bg-light">
        <NavbarBrand href="/">MOVIE'S</NavbarBrand>

        <Nav className=" d-flex fl mx-auto">
          <NavItem>
            <NavLink href="movies"> Movies </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
export default Navigation;
