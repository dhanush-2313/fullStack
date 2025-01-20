import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
    username:String,
    age:Number,
    email:String
})

export const user = mongoose.model("user",mySchema);