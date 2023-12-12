import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminVerify } from '../Services/Admindata';

export function AdminLogin() {
  const [admindata, setAdmindata] = useState({Name:"",Password:""});

 const navigate = useNavigate();

  const handleChange = (e) => {
    setAdmindata({...admindata,[e.target.name]:e.target.value});
    console.log(admindata);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
        const response = await AdminVerify(admindata);
    
      
      
        if(response.data !== "Not Approved" || response.data !== "NOTOK")
        {
          localStorage.setItem("token",response.data.token);
        navigate(`/admin`)
        }
        else{
          navigate(`/adminLogin`)
        }
        
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="d-flex justify-content-center " style={{marginTop:"30px"}}>
      <Form style={{ width: '300px', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Enter Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
             name="Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Enter your password"   name="Password"  onChange={handleChange} />
        
        </Form.Group>

        <br></br>
        <br></br>
     
        <Button variant="primary" type="submit" style={{marginLeft:"40px"}} 
        >
          Login
        </Button>
        &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <Button variant="success"  
        onClick={()=>
            {
              navigate(`/adminreg`)
            }}>
          Signup
        </Button>

       
      </Form>
    </Container>
  );
}
