const express = require("express");

const mongoose = require("mongoose");

const app = express();

const movies=[];

app.use(express.json())

const connect = () =>{
    return mongoose.connect("mongodb://127.0.0.1:27017/entertainmentdb", {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useCreateIndex : true  
    })
}

const movieSchema = new mongoose.Schema({
    id:Number,
    movie_name:String,
    movie_genre:String,
    production_year:Number,
    budget:Number
},{
    versionKey:false
})



const Movie =mongoose.model("movie",movieSchema);

app.post("/movies", async(req,res)=>{
    const movies= await Movie.create(req.body);
    res.send(movies)
})

app.get("/movies", async(req,res)=>{
    const movies= await Movie.find().lean().exec();
    res.send(movies)
})

app.get("/movies/:id", async(req,res)=>{
    const movies= await Movie.findById(req.params.id).lean().exec();
    res.send(movies)
})


app.get("/moviesSingle", async(req,res)=>{
    const movies= await Movie.findOne().lean().exec();
    res.send(movies)
})

app.patch("/movies/:id", async(req,res)=>{
    const movies= await Movie.findByIdAndUpdate(req.params.id, req.body, {new : true}).lean().exec();
    res.send(movies)
})

app.delete("/movies/:id", async(req,res)=>{
    const movies= await Movie.findByIdAndDelete(req.params.id).lean().exec();
    res.send(movies)
})





app.listen(3333, async()=>{
    await connect();
    console.log("listening port 3333");
    console.log("hello")
})
