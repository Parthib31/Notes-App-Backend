const express = require("express");
const { noteModel } = require("../Models/noteModel");

const noteRouter = express.Router();


noteRouter.get("/",async(req,res)=>{
    try{
            const notes = await noteModel.find({});
            res.status(200).json(notes);
        }catch(err){
            res.status(404).json({message:"can't get notes"});
        }
});

noteRouter.get("/:id" , async(req, res) => {
    try{
        const note = await noteModel.findById(req.params.id);
        res.status(200).json(note);
    }catch(err){
        res.status(404).json({message:"can't get this note"});
    }
})

noteRouter.post("/add",async(req,res)=>{
    try {
        const note = new noteModel(req.body);
        await note.save();
        res.status(200).json(note);
    } catch (error) {
        res.status(404).json({message:"can't add notes"});
    }
})


noteRouter.put("/:id",async(req,res)=>{
    try {
        await noteModel.findByIdAndUpdate({_id:req.params.id}, req.body);
        res.status(200).json(notes);
    } catch (error) {
        res.status(404).json({message:"can't edit notes"});
    }
})

noteRouter.delete("/:id",async(req,res)=>{
    try {
        await noteModel.deleteOne({_id:req.params.id});
        res.status(201).json("User deleted Successfully");
    } catch (error) {
        res.status(404).json({message : error.message});
    }
})

module.exports = {
  noteRouter,
};