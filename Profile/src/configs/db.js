const mongoose = require("mongoose");


const connect = () =>{
    return mongoose.connect("mongodb+srv://dhirendra:dhirendra@123@cluster0.m1g9p.mongodb.net/userDB?retryWrites=true&w=majority", {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useCreateIndex : true,
        useFindAndModify :false
        
    })
}

module.exports = connect;
