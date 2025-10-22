import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB=async ()=>{
    try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)//"{db url}/{name of database you wnat to connect}"
    console.log(`\n mongodb connected !! DB HOST: ${connectionInstance.connection.host}`);
    }catch(err){
        console.log(`Some Error Occured During connecting DB ${err}`);
        process.exit(1)//node module         
    }
}

export default connectDB