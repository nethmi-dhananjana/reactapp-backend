const app= require("./app");
const port=3001;
const host='localhost';
const mongoose =require('mongoose')
const router = require("./router")
const cors =require('cors');
const express = require('express');


app.use(cors());
app.use(express.json());

const url="mongodb+srv://nethmi:React123@cluster0.agxy4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connect = async()=>{
    try{
        await mongoose.connect(url);
        console.log("connected to mongo db ")

    }
    catch(error){
        console.log("MONGO DB ERROR")


    }
};

connect();

const server = app.listen(port , host, ()=>{
    console.log("Node servwr is listning to ${server.address().port}")
});

app.use("/api",router);














