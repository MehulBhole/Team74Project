import  express, { request, response }  from 'express';
import { waterSchemaCol } from './WaterInfoSchema.js';
import mongoose from 'mongoose';
import cors from 'cors';
import { Admindata } from './AdminData.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserData } from './Userschema.js';
import { HostData } from './HostData.js';

function verifytoken(request,response,next)
{
const header = request.get('Authorization');
if(header)
{
   const token = header.split(" ")[1];
   jwt.verify(token,"team74",(error,payload)=>
   {
      if(error)
      {
         response.send("invalid token");
      }
      else{
         next();
      }
   })  
  
}
else
{
   response.send("NO token matched");
}
}

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
app.put("/adminDataUpdate/:SecNo",verifytoken,async(request,response)=>
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

app.post("/adminRegData",async(request,response)=>
{  
   try {

      const data = request.body;
        data["Password"]= bcrypt.hashSync(data.Password,10);
           const adminData = new Admindata(data);
           await adminData.save();
           response.send("Admin Data Inserted")
   } catch (error) {
      console.log(error);
   }
           
})
app.post("/HostRegData",async(request,response)=>
{  
   try {

      const data = request.body;
        data["Password"]= bcrypt.hashSync(data.Password,10);
           const host = new HostData(data);
           await host.save();
           response.send("Host Data Inserted")
   } catch (error) {
      console.log(error);
   }
           
})
app.post("/adminverify",async(request,response)=>
{ 
   const admin =  await Admindata.findOne({Name:request.body.Name});
   
   if(admin.Flag !== 0){
       try {
     
      if(admin)
      {
         if(bcrypt.compareSync(request.body.Password,admin.Password))
         {
            const token = jwt.sign({adminName:admin.Name},"team74");
            response.send({token:token});       
         }
         else{
            response.send("Wrong password");
         }
      }
       } catch (error) {
         console.log(error);
       }
      }else{
         response.send("Not Approved");
      }
});
app.post("/username",async (request,response)=>
{
   try {
       const Name = new UserData(request.body);
       await Name.save();
       response.send("Name inserted");
   } catch (error) {
      console.log(error);
   }
})
app.post("/hostverify",async(request,response)=>
{ 
      
       try {
      const host =  await HostData.findOne({Name:request.body.Name});
      if(host)
      {
         if(bcrypt.compareSync(request.body.Password,host.Password))
         {
            const token = jwt.sign({hostName:host.Name},"team74");
            response.send({token:token});       
         }
         else{
            response.send("Wrong password");
         }
      }
       } catch (error) {
         console.log(error);
       }
});
app.get("/adminregapproval",async (request,response)=>
{
         try {
            const records = await Admindata.find({ "Flag": { $eq: 0 } });
            response.send(records);
         } catch (error) {
            console.log(error);
         }
});
app.put("/adminapprov/:name",async (request,response)=>
{
   const newFlagValue=1;
   try {
     await Admindata.findOneAndUpdate(
         { Name: request.params.name },
         { $set: { Flag: newFlagValue } },
         { new: true } 
     );
     response.send("Approved");
        
   } catch (error) {
      console.log(error);
   }
})
app.delete("/admindelete/:name",async (request,response)=>
{
  
   try {
      await Admindata.deleteOne({Name:request.params.name});
     response.send("Deleted Successfully");
        
   } catch (error) {
      console.log(error);
   }
})

app.listen(4444 ,()=>
{ 
     console.log("Server Started Port no 4444");
        connectDb();
});
