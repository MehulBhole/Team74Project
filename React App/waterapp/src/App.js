import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminDataInput } from "./Component/AdminDataInput";
import { AdminEdit } from "./Component/AdminEdit";
import { Userview } from "./Component/Userview";
import { Navigationbar } from "./Component/Navigationbar";
import { Home } from "./Component/Home";
import { UserLogin } from "./Component/UserLogin";
import { AdminLogin } from "./Component/AdminLogin";
import { HostLogin } from "./Component/HostLogin";
import { AdminRegistration } from "./Component/AdminRegistration";
import { HostApproval } from "./Component/HostApproval";
import { Aboutus } from "./Component/Aboutus";

function App() {
  return (
   <BrowserRouter>
   <Navigationbar></Navigationbar>
   <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/admin" element={<AdminDataInput></AdminDataInput>}></Route>
    <Route path="/adminedit/:secNo" element={<AdminEdit></AdminEdit>}></Route>
    <Route path="/userview" element={<Userview></Userview>}></Route>
    <Route path="/userLogin" element={<UserLogin></UserLogin>}></Route>
    <Route path="/adminLogin" element={<AdminLogin></AdminLogin>}></Route>
    <Route path="/adminreg" element={<AdminRegistration></AdminRegistration>}></Route>
    <Route path="/hostpage" element={<HostLogin></HostLogin>}></Route>
    <Route path="/hostapproval" element={<HostApproval></HostApproval>}></Route>
    <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
