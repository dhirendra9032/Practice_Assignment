const express=require('express');
const mongoose=require('mongoose');

const app=express();

app.get('/',(req,res)=>{
    res.send("listening")
})


app.listen(2000,()=>{
    console.log("listening at port 2000")
})