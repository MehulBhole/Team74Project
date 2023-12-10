import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { userdata } from '../Services/Userdata';

export function UserLogin() {
  const [name, setUsername] = useState({Name:""});
 const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername({...name,[e.target.name]:e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
      console.log(name);
       const response = await userdata(name);
       navigate(`/userview`);
       console.log(response);
     } catch (error) {
      console.log(error);
     }
  };
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <Container className="d-flex justify-content-center " style={{marginTop:"30px"}}>
      <Form style={{ width: '400px', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label>Enter Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
           name="Name"
            onChange={handleUsernameChange}
          />
        </Form.Group>
        <br></br>
        <br></br>
        <Form.Group >
        <ReCAPTCHA  
         sitekey="6Le1RiwpAAAAAEY2hT72NG9knpE8I5IyoMWqHJWY"
         onChange={onChange}
         />

        </Form.Group>
        <br></br>
        <br></br>
        <Button variant="success" type="submit" style={{ width: '100%' }}>
          Login
        </Button>
      </Form>
    </Container>
  );
}
