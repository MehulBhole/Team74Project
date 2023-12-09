import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminDataInput } from "./Component/AdminDataInput";
import { AdminEdit } from "./Component/AdminEdit";
import { Userview } from "./Component/Userview";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AdminDataInput></AdminDataInput>}></Route>
    <Route path="/adminedit/:secNo" element={<AdminEdit></AdminEdit>}></Route>
    <Route path="/userview" element={<Userview></Userview>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
