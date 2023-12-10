import mongoose, { Schema } from "mongoose";

const HostSchema = new Schema({
    "Name":String,
    "Password":String,
});

export const HostData= mongoose.model("HostDatas",HostSchema);