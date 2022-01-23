const express = require("express");
const mongoose = require("mongoose");

const UserSchema = require("../models/items.schema")

const router = express.Router();

router.get("/",async(req,res)=>{
    products = await UserSchema.find().lean();
    res.render("products",products)
})
router.get("/:id",async(req,res)=>{
    user = await UserSchema.findById(req.params.id).lean().exec();
    res.render("products",user)
})

router.post("/",async(req,res)=>{
    user = await UserSchema.create(req.body);
    res.status(200).json({data:user})
})
router.patch("/:id",async(req,res)=>{
    user = await UserSchema.findByIdAndUpdate(req.params.id ,req.body, {new:true}).lean().exec();
    res.status(200).json({data:user})
})

router.delete("/:id",async(req,res)=>{
    user = await UserSchema.findByIdAndDelete(req.params.id).lean().exec();
    res.status(200).json({data:user})
})

module.exports = router