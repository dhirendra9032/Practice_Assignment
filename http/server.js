const express = require("express");

let data = require("./users.json");
const app = express();

app.get("/users:id", (req,res)=>{
    res.send(data);
})

app.post("/users_post", (req,res)=>{
    res.send(data);
})

app.delete("/users_delete", (req,res)=>{
    res.send({id: req.param.id});
})

app.listen(3536,()=>{
    console.log("listening port 3536");
})