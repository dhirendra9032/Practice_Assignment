const express = require("express")

const router = express.Router();

const User = require("../model/user.model");

router.post("/", async (req,res)=>{
    const user= await User.create(req.body);
    return res.send(user);
});


router.get("/", async (req ,res)=>{
    const user = await User.find().lean().exec();
    return res.send(user);
})

module.exports = router;
