import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AdminRegDetails } from "../Services/Admindata";

export function AdminRegistration()
{ 
  const[admindetails,setDetails] = useState({Name:"",Email:"",Password:"",Designation:"",Mobile:""});
   const handlechange=(e)=>
   {
         setDetails({...admindetails,[e.target.name]:e.target.value});
   };
    const submitData=async()=>
    {
      try {
        console.log(admindetails);
         const response = await AdminRegDetails(admindetails);
         console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>
    {
           
    },[])
    return(
        <Container>
        <Form >
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name" name="Name" onChange={handlechange} />
          </Form.Group>
  
          <Form.Group as={Col} >
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Email" name="Email" onChange={handlechange}/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" name="Password" onChange={handlechange} />
          </Form.Group>
  
          <Form.Group as={Col} >
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Position" name="Designation" onChange={handlechange}/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Mobile No</Form.Label>
            <Form.Control type="text" placeholder="Enter Mobile No" name="Mobile" onChange={handlechange} />
          </Form.Group>
        </Row>
        <Button variant="primary" onClick={submitData}>
          Submit
        </Button>
      </Form>
      </Container>
    );
}