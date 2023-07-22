const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    title : {type : String, required : true},
    note : {type : String, required : true},
},{
    versionkey: false,
})

const noteModel = mongoose.model("note", noteSchema);

module.exports = {noteModel};