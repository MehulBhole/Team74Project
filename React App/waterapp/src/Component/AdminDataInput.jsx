import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { DeleteData, FetchData, SendDataAdmin } from "../Services/Admindata";
import { useNavigate } from "react-router-dom";

export function AdminDataInput()
{
     const[sectors,setSector] =  useState({SectorNo:"",SectorName:"",StartTime:"",EndTime:"",Remarks:""});
     const[fetchdata,setFetchdata]=useState([]);
     const navigate = useNavigate();

     const handleInput=(e)=>{
         setSector({...sectors,[e.target.name]:e.target.value});
   };
   async function populateData()  {
          try {
            const data =  await FetchData();
            console.log(data);
            setFetchdata(data);
            console.log(fetchdata);
          } catch (error) {
            console.log(error);
          }
   };
   const handleDelete=async(secNo)=>
   {
         try {
            await DeleteData(secNo);
            populateData();
         } catch (error) {
          console.log(error);
         }
   }
   
   const handleSubmit=async(e)=>
      {
       
          try {
            e.preventDefault();
            console.log(sectors);
          const response = await SendDataAdmin(sectors);
          await populateData();
          } catch (error) {
            console.log(error);
          }
      }
      useEffect(()=>
    {
         populateData();
    },[]);
    return (
      <Container style={{ marginTop: '15px' }} >
        <Form onSubmit={handleSubmit} style={{ border: '2px solid #ddd', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h3 style={{ margin: 'auto', width: 'fit-content' }}>Water Supply Time Update</h3>

          <br></br>
        <Row className="mb-3" >
          <Form.Group as={Col} >
            <Form.Label>Sector Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Sector Number" name="SectorNo" onKeyUp={handleInput} />
          </Form.Group>
  
          <Form.Group as={Col} >
            <Form.Label>Sector Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name="SectorName" onKeyUp={handleInput} />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Start Time</Form.Label>
            <Form.Control type="text" placeholder="Enter Start Time" name="StartTime" onKeyUp={handleInput} />
          </Form.Group>
  
          <Form.Group as={Col} >
            <Form.Label>End Time</Form.Label>
            <Form.Control type="text" placeholder="Enter End Time" name="EndTime" onKeyUp={handleInput} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} >
            <Form.Label>Remarks</Form.Label>
            <Form.Control type="text" placeholder="Enter Remarks" name="Remarks" onKeyUp={handleInput} />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <b><hr></hr></b>
      <h3 style={{ margin: 'auto', width: 'fit-content', marginBottom:"20px" }}>Updated Time</h3>
      <Row className="mb-3">

    <Table striped bordered hover style={{textAlign:"center"}}>
      <thead>
        <tr>
          <th>Sector No</th>
          <th>Sector Name</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Operation</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
         {fetchdata.map(d=>
        <tr>
          <td>{d.SectorNo}</td>
          <td>{d.SectorName}</td>
          <td>{d.StartTime}</td>
          <td>{d.EndTime}</td>
          <td>
          <Button style={{marginLeft: 1 + 'em'}}variant="danger" onClick={()=>{
            handleDelete(d.SectorNo)
          }}>Delete</Button> &nbsp;&nbsp;&nbsp;
          <Button variant="success" onClick={()=>
          {
            navigate(`/adminedit/${d.SectorNo}`)
          }} >Edit</Button>
          </td>
          <td>{d.Remarks}</td>
        
        </tr>
       )}
      </tbody>
    </Table>
         
        </Row>
        
         
      </Container>
     
    );
 
}