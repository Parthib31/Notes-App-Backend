const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const {connect} = require("./db");
const {noteRouter} = require("../Router/noteRouter");


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", noteRouter);
app.get("/api", (req, res)=>{
    res.json({message:"hello from server!"});
})

// app.get("*", (req, res)=>{
//     res.sendFile(path.resolve(__dirname , "../keeper_app/build", "index.html"))
// })

const port = process.env.PORT;

app.listen(port, async()=>{

    try{
        await connect;
        console.log("Database Successfully connected");
    }catch(err){
        console.error(err);
    }

    console.log("App is listening on the port ",port);
})