import mongoose from "mongoose";
import express from "express";
import {DB_NAME} from "../constants.js"

const connectDB= async ()=>{
    try {
        const dbinst=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("DB conenected sucessfully..!",dbinst.connection.host);
    } catch (error) {
        console.log("Error during DB connect",error);
        throw error;
    }
}

export default connectDB;