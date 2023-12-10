import axios from "axios";

export async function HostServices(credentials)
{
    try {
         const response = await axios.post("http://127.0.0.1:4444/hostverify",credentials);
         return response;
    } catch (error) {
        console.log(error);
    }
}
export async function FetchAdminData()
{
  try {
    const response= await axios.get("http://127.0.0.1:4444/adminregapproval");
    
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function adminApproval(Name)
{
  try {
    const response= await axios.put(`http://127.0.0.1:4444/adminapprov/${Name}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function adminDeletion(Name)
{
  try {
    const response= await axios.delete(`http://127.0.0.1:4444/admindelete/${Name}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}