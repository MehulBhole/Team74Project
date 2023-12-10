import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import fevicon from "./Fevicon.svg";
import { getToken, logOut } from "../Utils/Tokenutils";
import { useNavigate } from "react-router-dom";

export function Navigationbar() {
  const navigate = useNavigate();
   
    const handlesubmit=()=>
    {
      
      logOut();
    
      navigate(`/`)

    }
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
           <img src={fevicon}    
                        
                        width="90"
                        height="70"
                         ></img>
           जल जीवन </Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/userLogin">
            <Nav.Link>User Login </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/adminLogin">
            <Nav.Link>Admin Login </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/hostpage">
            <Nav.Link>Host Login </Nav.Link>
          </LinkContainer>
        </Nav>
        <Button variant="success" onClick={handlesubmit}>Log Out</Button>
      </Container>
    </Navbar>
  );
}
