const express = require("express");
const mongoose = require("mongoose");

const   loginSchema = require("../module/login.scema")
const UserSchema = require("../module/user.module")

const router = express.Router();

router.get("/",async(req,res)=>{
    user = await UserSchema.find().lean();
})

router.get("/:name",async(req,res)=>{
    userLogin = await loginSchema.findById(req.params.name).lean().exec();
    for(i=0;i<user.length;i++){
        if(user[i]==userLogin){
            console.log("alredyLogedIn")
            break;
        }
    }
    console.log("signUp")
    

    
    res.status(200).json({data:user})
})