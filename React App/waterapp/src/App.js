import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminDataInput } from "./Component/AdminDataInput";
import { AdminEdit } from "./Component/AdminEdit";
import { Userview } from "./Component/Userview";
import { Navigationbar } from "./Component/Navigationbar";
import { Home } from "./Component/Home";
import { UserLogin } from "./Component/UserLogin";
import { AdminLogin } from "./Component/AdminLogin";
import { AdminRegistration } from "./Component/AdminRegistration";

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
    <Route path="adminreg" element={<AdminRegistration></AdminRegistration>}></Route>
    
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
