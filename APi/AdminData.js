import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema({
    "Name":String,
    "Email":String,
    "Password":String,
    "Designation":String,
    "Mobile":String,
    "Flag": { type: Number, default: 0 }
});

export const Admindata= mongoose.model("Admindata",AdminSchema);