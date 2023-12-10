import mongoose, { Schema } from "mongoose";

const user = new Schema({
    "Name":String
})

  export const UserData = mongoose.model("Username",user);