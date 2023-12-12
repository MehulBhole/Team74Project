import React, { useState } from 'react';
import { Container, Form, Button, Alert, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HostServices } from '../Services/Hostservice';

import './HostLogin.css';

export function HostLogin() {
  const [host, setHost] = useState({ Name: "", Password: "" });
  const [isSubmitted, setIsSubmitted] = useState(null); // Initialize to null
  const navigate = useNavigate();

  const handleChange = (e) => {
    setHost((prevHost) => ({ ...prevHost, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await HostServices(host);
      
      setIsSubmitted(true);
      if(response.data !== "NOTOK")
      {
        navigate(`/hostapproval`);
      }
      else{
        navigate(`/hostpage`);
      }
    } catch (error) {
      setIsSubmitted(false);
      console.error(error);
    }
  };

  return (
    <Container className="custom-host-login-container">
      <Form className="custom-host-login-form" onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Enter Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            name="Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" name="Password" onChange={handleChange} />
        </Form.Group>

        <Button className="custom-login-button" variant="primary" type="submit">
          Login
        </Button>

        <Row className="mt-2">
          <Col lg={4}>
            {isSubmitted === false && (
              <Alert className="custom-error-alert" variant="danger">
                Invalid Credentials
              </Alert>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
