const express =require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan')

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(helmet());

const connect=()=>{
 return mongoose.connect(' mongodb://127.0.0.1:27017/web_10_db',{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useNewUrlParser:true

})
.then(()=>{
 console.log("Succeesfully connected")
})
.catch((err)=>console.log(err))
}

app.get("/",(req,res)=>{
    res.json({
        message : "Successfully geting what you want"
    })
})

module.exports = app;
