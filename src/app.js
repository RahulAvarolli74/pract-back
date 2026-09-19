import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

//multer middle ware used to handle the files type of data 
// here the routes and main configurations are done using multiple middlewares 

const app =express();
//adding middle wares 


app.use(cors({
    origin:process.env.ALLOWED,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(cookieParser())
app.use(express.static("public"));


//routes for pages;
import userRoute from "../src/routes/user.routes.js"

app.use("/api/v1/users",userRoute);

export {app};