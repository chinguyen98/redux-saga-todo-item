import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logoutUserAction } from '../../actions/user.action';

function Menu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLogged } = useSelector(state => state.user);

  const logout = () => {
    dispatch(logoutUserAction(history.push));
  }

  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'pink' }}>
      <Navbar.Brand href="/">Todo App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Text><Link to="/">Home</Link></Navbar.Text>
          {
            !isLogged
              ?
              (
                <NavDropdown title="Auth" id="collasible-nav-dropdown">
                  <NavDropdown.Item><Link to="/auth/login">Login</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/auth/register">Register</Link></NavDropdown.Item>
                </NavDropdown>
              )
              :
              <Navbar.Text onClick={logout}>Logout</Navbar.Text>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu;