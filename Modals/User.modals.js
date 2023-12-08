import mongoose, { Schema } from "mongoose";

const user = new Schema({
    firstname : String,
    lastname : String,
    email : String,
    password : String,
    phone : Number
})

export default mongoose.model("AppleUser" , user)