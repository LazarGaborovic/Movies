import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import './Navigation.css'


const Navigation = () => {
  
    
    return (
      <div>
        <Navbar className='container-fluid bg-light' >
          <NavbarBrand href="/">MOVIE'S</NavbarBrand>
        
            <Nav className=" d-flex fl mx-auto" >
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink> Movies </NavLink>
              </NavItem>
         
            </Nav>
           <input type="search" placeholder='Search'></input>
    
        </Navbar>
      </div>
    );
  }
  export default Navigation