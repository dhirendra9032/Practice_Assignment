const express = require("express")
const app = express();

app.use(express.json());


const connect= require("./configs/db");

const userController = require("./controller/user.controller.js");


app.use("/users", userController)

app.listen(2234, async()=>{
   await connect();
    console.log("listening on 2234")
});