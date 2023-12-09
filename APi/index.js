import  express, { request, response }  from 'express';
import { waterSchemaCol } from './WaterInfoSchema.js';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.get("/getUser",async(request,response)=>
{
    try {
        const data = await waterSchemaCol.find();
        response.send(data);
        console.log(data);
} catch (error) {
 console.log(error);
}
});
app.put("/adminDataUpdate/:SecNo",async(request,response)=>
{
   const dataUpdate = request.body;
   try {
         const data = await waterSchemaCol.findOneAndUpdate({SectorNo:request.params.SecNo}, dataUpdate,
            { new: true });
         response.send({data:data});
         
   } catch (error) {
      console.log(error);
   }
});
app.delete("/adminDataDelete/:sec",async(request,response)=>
{
          try {
         await waterSchemaCol.deleteOne({SectorNo:request.params.sec});
         response.send("data Deleter!!");
          } catch (error) {
            console.log(error);
          }
});
app.get("/getAdmin",async(request,response)=>
{
   try {
           const data = await waterSchemaCol.find();
           response.send(data);
         
   } catch (error) {
    console.log(error);
   }
});
app.get("/getAdminEdit/:secNo",async(request,response)=>
{
   try {
           const data = await waterSchemaCol.findOne({SectorNo:request.params.secNo});
           response.send(data);
         
   } catch (error) {
    console.log(error);
   }
});

app.post("/postData",async(request,response)=>
{
    const data = request.body;
     try {
        const waterData = new waterSchemaCol(data);
          await waterData.save();  
          response.send("Data Inserted");  
     } catch (error) {
        console.log(error);
     }
});
const connectDb=(async()=>
{
     try {
        await mongoose.connect('mongodb://127.0.0.1:27017/WaterSupplyboard');
        console.log("Database Started with WaterSupplyboard");
     } catch (error) {
        console.log(error);
     }
});
app.listen(4444 ,()=>
{ 
     console.log("Server Started Port no 4444");
        connectDb();
});
