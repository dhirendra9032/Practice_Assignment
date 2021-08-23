const express = require("express");

const app = express();

const mongoose = require("mongoose");

//const users = [];
app.use(express.json())

// we have coonnect with mangoose 
const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/web_10_db",{
     
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

const postSchema = new mongoose.Schema({
    title: {type: String,required:true},
    body:{type: String , required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    tagId:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"tag",
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})

const Post=mongoose.model("post",postSchema);

const commentSchema = new mongoose.Schema({
    comment_body:{type: String , required:true},
     postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})

const Comment=mongoose.model("comment",commentSchema);

const tagSchema = new mongoose.Schema({
  
    name:{type: String , required:true}
},{
    versionKey:false,
    timestamps:true
})

const Tag=mongoose.model("tag",tagSchema);

app.post("/post", async (req,res)=>{
    const posts= await Post.create(req.body);
    res.send(posts);
})

app.post("/tag", async (req,res)=>{
    const tag= await Tag.create(req.body);
    res.send(tag);
})

app.post("/posts", async (req,res)=>{
    try{
    const posts= await Post.find().lean.exec()
   return res.send(posts);
    }
    catch(err){
      return  res.status(400).send(err.message)
    }
})



app.post("/users", async(req, res) => {
    const user = await User.create(req.body)
    return res.send(user)
})

app.get("/users/", async(req, res) => {
     const users = await User.find().lean().exec();
   
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