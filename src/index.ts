import "module-alias/register"
import dotenv from "dotenv";
dotenv.config()
import connectDB from "@/db/index";
import { app } from "@/app";


connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
    app.on("error==>", (error:any) => {
      console.log("====>",error)
      throw error
    });
}).catch((error:any)=>{
    console.log("Dta base error connection",error)
})


// import { DB_NAME } from "./constansts";
// dotenv.config({
//     path:'./env'
// })


// we can use like this

// import express from "express";

// const app = express();

// (async () => {
//   try {
//     mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error==>", (error) => {
//       console.log("---->", error);
//       throw error;
//     });

//     app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on ${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.log("===>", error);
//     throw error;
//   }
// })();
