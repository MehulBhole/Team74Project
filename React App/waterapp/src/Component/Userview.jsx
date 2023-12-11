import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { FetchData } from "../Services/Admindata";

export function Userview()
{
          const[userdata,setUserdata] = useState([]);
          async function populateData()
          {
            try {
                const data = await FetchData();
                setUserdata(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
          }
          useEffect(()=>
          { 
             populateData();
          },[])
    return(
        <Container>
           <h3 style={{ margin: 'auto', width: 'fit-content', marginBottom:"20px" ,marginTop:"10px"}}>Water Time Chart</h3>
        <Table striped bordered hover>
        <thead>
          <tr>
             <th>Sector No</th>
            <th>Sector Name</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
            {userdata.map(d=>
            
                 <tr>
                 <td>{d.SectorNo}</td>
                 <td>{d.SectorName}</td>
                 <td>{d.StartTime}</td>
                 <td>{d.EndTime}</td>
               </tr>
               
            )}
        </tbody>
      </Table>
      </Container>
    );
}