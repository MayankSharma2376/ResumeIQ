import express from "express";
import dotenv from "dotenv"
import app from "./app";
import mongoose from "mongoose";

dotenv.config({
    path: "./.env"
})

console.log("Client Url : ", process.env.CLIENT_URL)


import connectDB from "../config/database"





const startServer = async()=>{
    try{
        await connectDB()
       

       

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port http://localhost:${process.env.PORT}`)
            console.log()

        })


    }catch(err){
        console.error("Not Connected", err)


    }
}

startServer()