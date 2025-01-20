import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:String,
    age:Number,
    email:{
        type:String,
        require:true
    }
})

export const user = mongoose.model("user",userSchema);