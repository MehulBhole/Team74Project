import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row} from "react-bootstrap";
import {   FetchDatabySecNO,  UpdateDataAdmin } from "../Services/Admindata";
import {  useParams } from "react-router-dom";

export function AdminEdit()
{
    const param=useParams();
     const[sectors,setSector] =  useState({SectorNo:"",SectorName:"",StartTime:"",EndTime:"",Remarks:""});
     const handleChange=(e)=>{
         setSector({...sectors,[e.target.name]:e.target.value});
   };
   async function populateData()  {
          try {
            const data =  await FetchDatabySecNO(param.secNo);
            setSector(data);
            
          } catch (error) {
            console.log(error);
          }
   };
  
   useEffect(()=>
    {
         populateData();
    },[]);
   const handleSubmit=async(e)=>
      {
          e.preventDefault();
          
          try {
          const response = await UpdateDataAdmin(sectors,param.secNo);
          console.log(response);
          } catch (error) {
            console.log(error);
          }
      }
      
    return (
      <Container>
        <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Sector Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Sector Number" value={sectors.SectorNo} name="SectorNo"onChange={handleChange} />
          </Form.Group>
  
          <Form.Group as={Col} >
            <Form.Label>Sector Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={sectors.SectorName} name="SectorName" onChange={handleChange}  />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Start Time</Form.Label>
            <Form.Control type="text" placeholder="Enter Start Time" value={sectors.StartTime} name="StartTime" onChange={handleChange} />
          </Form.Group>
  
          <Form.Group as={Col} >
            <Form.Label>End Time</Form.Label>
            <Form.Control type="text" placeholder="Enter End Time" value={sectors.EndTime} name="EndTime" onChange={handleChange}/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Remarks</Form.Label>
            <Form.Control type="text" placeholder="Enter Remarks" value={sectors.Remarks} name="Remarks"  onChange={handleChange}/>
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    
    
      </Container>
     
    );
 
}