// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/connect.js";


dotenv.config({path: './.env'});

connectDB();






























/*
// This is a good approach but it pollute our index file.
import mongoose from "mongoose";
import {DB_NAME} from './constants'
import express from "express";
const app = express();

(async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",(error)=>{
      console.log("Err: ",error);
      throw error;
    })
    app.listen(process.env.PORT,()=>{
      console.log(`Server is running on port ${process.env.PORT}`);
    })

  } catch (error) {
    console.log("Err: ",error);
    throw error;
  }
})()
*/