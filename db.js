import mongoose from "mongoose";
//function to connect mongo database
export default async function dbConnection(){
    try {
        //connection string fetched from .env file
        await mongoose.connect(process.env.connection_string);
        console.log("Database connected")
    } catch (error) {
        console.log("Error connecting database")
    }
}