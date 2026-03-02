import { Notes } from "../Models/notes.js";
import { ObjectId } from "bson";

//to get all notes data
export default function getData(){
    return Notes.find();
}
//to add notes data
export function addData(notes){
    return Notes.insertOne(notes)
}
//to edit and update data using id
export function findData(id,notes){
    return Notes.findByIdAndUpdate({_id:new ObjectId(id)},{$set:{notes}})
}
//to delete data using id
export function deleteData(id){
    return Notes.findByIdAndDelete({_id:new ObjectId(id)})
}