import { Button, Col, Container, Form, Row } from "react-bootstrap";

export function AdminRegistration()
{
    return(
        <Container>
        <Form >
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name"  />
          </Form.Group>
  
          <Form.Group as={Col} >
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Email"  />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password"   />
          </Form.Group>
  
          <Form.Group as={Col} >
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Position" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Mobile No</Form.Label>
            <Form.Control type="text" placeholder="Enter Mobile No"  />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    );
}