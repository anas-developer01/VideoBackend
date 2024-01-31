import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB();


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
