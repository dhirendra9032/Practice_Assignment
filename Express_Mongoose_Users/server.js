const express = require("express");

const app = express();

const mongoose = require("mongoose");

const users = [];
app.use(express.json())

// we have coonnect with mangoose 
const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/web10db",{
     
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        useCreateIndex : true

     
    })
}

// now we have to set shchema
const userShema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name : String,
    email : String,
    gender : String,
    age : Number
},{
    versionKey:false
})

// create model

const User = mongoose.model("user" , userShema);

app.post("/users", async(req, res) => {
    const user = await User.create(req.body)
    return res.send(user)
})

app.get("/users/", async(req, res) => {
     const users = await User.find({first_name: "Rahul"}).lean().exec();
   
    res.send(users);
})

app.get("/users/:id", async(req, res) => {
  
    const user = await User.findById(req.params.id).lean().exec();
    res.send(user);
})

app.patch("/users/:id", async(req, res) => {
  
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new : true})
    res.send(user);
})

app.delete("/users/:id", async(req, res) => {
  
    const user = await User.findByIdAndDelete(req.params.id).lean();
    res.send(user);
})

app.listen(2233, async() => {
    await connect();
    console.log("listening")
})