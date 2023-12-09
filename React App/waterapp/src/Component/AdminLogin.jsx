import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function AdminLogin() {
  const [admindata, setAdmindata] = useState('');

 const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setAdmindata({...admindata,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <Container className="d-flex justify-content-center " style={{marginTop:"30px"}}>
      <Form style={{ width: '300px', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Enter Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            onChange={handleUsernameChange}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />

        </Form.Group>
        <br></br>
        <br></br>
        <Button variant="success" type="submit" style={{ width: '100%' }}
        onClick={()=>
            {
              navigate(`/admin`)
            }}>
          Login
        </Button>
      </Form>
    </Container>
  );
}
