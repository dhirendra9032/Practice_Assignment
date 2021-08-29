const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name:String,
    dob:String,
    mobile_no:Number,
    email:String,
    pan:String,
    gender:String,
    marital_status:String,
    code:Number
},{
    versionKey:false,
    timestamps:true
})

const User = mongoose.model("user", userSchema);

module.exports = User;
