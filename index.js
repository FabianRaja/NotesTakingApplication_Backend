import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./db.js";
import { Notes } from "./src/Routes/index.js";

//configuring dotenv
dotenv.config();

//intializing port
const PORT=process.env.PORT;

//initializing server
const app=express();

//connecting database
dbConnection();

//middlewares
app.use(cors());
app.use(express.json());

//routers
app.use("/",Notes);

//starting server
app.listen(PORT,()=>{console.log(`Server started in PORT - ${PORT}`)})