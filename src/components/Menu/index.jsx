import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Todo App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/todo">ToDo</Nav.Link>
          <NavDropdown title="Auth" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/auth/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="/auth/register">Register</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu;