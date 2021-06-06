import React from "react";
import {Route} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import {NavLink } from "react-router-dom"
import {logout} from "../actions/userActions";
import SearchBox from "./SearchBox";

const Header = () => {

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

const logoutHandler = ()=>{
  dispatch(logout());
}



  return (
    <Navbar bg="info" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Product Shop</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
           <Route render={({history})=> <SearchBox history={history} />} />
           <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i>Cart
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link path="/login">
                  <i className="fas fa-user"></i>Sign In
                </Nav.Link>
              </LinkContainer>
            )}
            {userInfo && userInfo.isAdmin && (
               <NavDropdown title='Admin' id="adminmenu">
               <LinkContainer to="/admin/userList">
                 <NavDropdown.Item>Users</NavDropdown.Item>
               </LinkContainer>
               <LinkContainer to="/admin/productList">
                 <NavDropdown.Item>Products</NavDropdown.Item>
               </LinkContainer>
               <LinkContainer to="/admin/ordersList">
                 <NavDropdown.Item>Orders</NavDropdown.Item>
               </LinkContainer>
             </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
