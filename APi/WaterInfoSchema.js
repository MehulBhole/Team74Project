import mongoose, { Schema } from "mongoose";

const waterSchema = new Schema(
    {
            "SectorNo":Number,
            "SectorName":String,
            "StartTime":String,  
            "EndTime":String,  
             "Remarks":String
    }
);

 export const waterSchemaCol =mongoose.model("waterSchemeInfo",waterSchema);
 
