import axios from "axios";
import { getToken } from "../Utils/Tokenutils";

export async function SendDataAdmin(sectorData)
{
    try {
        const response = await axios.post("http://127.0.0.1:4444/postData");
        return response;
    } catch (error) {
        console.log(error);
    }
}
export async function FetchData()
{
    try {
        const response = await axios.get("http://127.0.0.1:4444/getAdmin"); 
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export async function DeleteData(secNo)
{
    console.log(secNo);
    try {
      const data = await axios.delete(`http://127.0.0.1:4444/adminDataDelete/${secNo}`);
      console.log(data);
    } catch (error) {
        console.log(error);
    }
}
export async function FetchDatabySecNO(secNo)
{
       try {
        const response =await axios.get(`http://127.0.0.1:4444/getAdminEdit/${secNo}`);
        
        return response.data;
       } catch (error) {
        console.log(error);
       }
}
export async function UpdateDataAdmin(sectorData,secNo)
{
    try {
        const response = await axios.put(`http://127.0.0.1:4444/adminDataUpdate/${secNo}`,sectorData);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export function AdminRegDetails(admindata)
{
   
    try {
        const response= axios.post("http://127.0.0.1:4444/adminRegData",admindata);
        return response;
    } catch (error) {
        console.log(error);
    }
}
export function AdminVerify(credentials)
{
    try {
        const response = axios.post("http://127.0.0.1:4444/adminverify",credentials);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}