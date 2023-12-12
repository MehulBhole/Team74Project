import axios from "axios";

export async function userdata(Name)
{
    try {
       const response =await axios.post("http://127.0.0.1:4444/username",Name); 
           return response;    
    } catch (error) {
        console.log(error)
    }
}
export async function FetchDataUser()
{
    try {
        const response = await axios.get("http://127.0.0.1:4444/getUser"); 
        return response.data;
    } catch (error) {
        console.log(error);
    }
}