const express = require("express")
const mangoos = require("mongoose");



const app = express();

const connect = ()=>{

    return mangoos.connect("mongodb://127.0.0.1:27017/entertainmentdb", {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useCreateIndex : true
    })
}

const moviesSchema= new mangoos.Schema({
    id : Number,
    movie_name: String,
    movie_genre: String,
    production_year: Number,
    budget:Number
})

const Movie = mangoos.model("movie",moviesSchema);

app.post("/movies", async (req,res)=>{
    const movie = await Movie.create(req.body);
     res.send(movie);
})



app.listen(2345, async ()=>{
    await connect;
    console.log("connected");
});