import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import fevicon from "./Fevicon.svg";

export function Navigationbar() {
    const imgStyle = {
        maxWidth: '50%', // Set the maximum width of the image to its container width
        height: 'auto',   // Allow the image to scale proportionally
        marginLeft:'1px'
      };
    
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
           <img src={fevicon} style={imgStyle} ></img>
        Jal Jivan</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin">
            <Nav.Link>Admin</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/adminreg">
            <Nav.Link>Admin Registration</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/userLogin">
            <Nav.Link>User Login </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/adminLogin">
            <Nav.Link>Admin Login </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}
