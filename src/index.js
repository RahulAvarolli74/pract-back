
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import connectDB from "./db/index.js";
//main entry point of the backend /server ...!
import {app} from "./app.js"
//always use try catch blocks

connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Error during Mongodb connection",error);
})