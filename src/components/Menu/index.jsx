import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Menu() {
  const { isLogged } = useSelector(state => state.user);

  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'pink'}}>
      <Navbar.Brand href="/">Todo App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Text><Link to="/">Home</Link></Navbar.Text>
          {
            !isLogged && (
              <NavDropdown title="Auth" id="collasible-nav-dropdown">
                <NavDropdown.Item><Link to="/auth/login">Login</Link></NavDropdown.Item>
              </NavDropdown>
            )
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu;