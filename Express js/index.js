import express from "express";
const app=express();

app.get("/",(req,res)=>{
    res.send("hey! Welcome to our website!")
});

app.post("/register",(req,res)=>{
    res.sendStatus(201)
});
app.listen(3000,()=>{
    console.log("server started!")
});