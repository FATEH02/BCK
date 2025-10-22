// require('dotenv').config({path:'./env'}) this is the version which are toled by dotenv itslef
import dotenv from "dotenv"
import mongoose  from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/index.js";
dotenv.config({
    path:"./env"
})

connectDB();


//iifie

// (async ()=>{
//     try{
//      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     }catch(err){
//       console.log("some error occured":err);
//     }
// })() 