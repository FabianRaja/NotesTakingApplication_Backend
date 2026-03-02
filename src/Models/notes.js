import mongoose from "mongoose";
//model schema for notes 
const notesSchema=new mongoose.Schema({

   notes:{
    type:String,
   },},
   {
    timestamps: true, 
  }
);

const Notes=mongoose.model("notes",notesSchema);
export {Notes};