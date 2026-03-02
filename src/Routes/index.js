import express from "express";
import getData, { addData, deleteData, findData } from "../Controllers/index.js";
//setting up router
const app=express.Router();

//to get all notes data
app.get("/",async(req,res)=>{
    try {
        const getAllData=await getData();
        return res.status(200).json({message:"Data fetched Successfully",data:getAllData})
    } catch (error) {
        console.log(error);
         res.status(500).json({message:"Error fetching all notes data"})
    }
})


//to add notes data
app.post("/add",async(req,res)=>{
    try {
        const obj={
            notes:req.body.notes
        }
        //adding data to the db
        const addingData=await addData(obj);
        return res.status(200).json({message:"Data upload Successful"})
    

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Error while adding data"})
    }
})

//to edit notes data
app.put("/edit",async(req,res)=>{
    try {
        //finding data
        const findingData=await findData(req.body._id,req.body.notes);
        return res.status(200).json({message:"Data modified Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Error while editing data"})
    }
})

//to delete notes data
app.delete("/delete/:id",async(req,res)=>{
    try {
        //id from params
        const { id } = req.params;
        const deletingData=await deleteData(id);
        return res.status(200).json({message:"Data deleted Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Error while deleting data"})
    }
})


export const Notes=app;