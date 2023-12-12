import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import fevicon from "./Fevicon.svg";
import { logOut } from "../Utils/Tokenutils";
import { useNavigate } from "react-router-dom";

export function Navigationbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate(`/`);
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={fevicon}
              alt="Logo"
              width="90"
              height="70"
              className="d-inline-block align-top"
            />
            जल जीवन
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/userLogin">
              <Nav.Link>User Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/adminLogin">
              <Nav.Link>Admin Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/hostpage">
              <Nav.Link>Host Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/aboutus">
              <Nav.Link>About us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Button variant="success" onClick={handleLogout}>
            Log Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
