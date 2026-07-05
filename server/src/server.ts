import express from "express";
import dotenv from "dotenv"
import app from "./app";
import mongoose from "mongoose";

dotenv.config({
    path: "./.env"
})




import connectDB from "../config/database"





const startServer = async()=>{
    try{
        await connectDB()
       

       

        app.listen(process.env.PORT || 5080 , ()=>{
            console.log(`Server is running on port http://localhost:${process.env.PORT} || 5080`)
            

        })


    }catch(err){
        console.error("Not Connected", err)


    }
}

startServer()