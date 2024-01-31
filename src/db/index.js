import mongoose from "mongoose";
import { DB_NAME } from "../constansts.js";

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(
          `${process.env.MONGODB_URI}/${DB_NAME}`);
          console.log(`/n MongoDB connect !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MOngoDb Error",error)
        process.exit(1)
    }
}
export default connectDB;