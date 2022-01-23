const express = require("express");
const mongoose = require("mongoose");

const productSchema = require("../models/frontPage.schema")

const router = express.Router();

router.get("/Data1",async(req,res)=>{
    product = await productSchema.find({item_name:"Lord Shiv Trishul Locket with Rudraksha"}).lean().exec();
    res.render("productPage",product)
    //res.status(200).json({data:product})
})
router.get("/Data2",async(req,res)=>{
    product = await productSchema.find({item_name:"Cotton Tshirt Men"}).lean().exec();
    res.render("productPage",product)
})
router.get("/Data3",async(req,res)=>{
    product = await productSchema.find({item_name:"10000 mah PowerBank"}).lean().exec();
    res.render("productPage",product)
})
router.get("/Data4",async(req,res)=>{
    product = await productSchema.find({item_name:"Anti crack heal Protector Socks"}).lean().exec();
    res.render("productPage",product)
})
router.get("/Data5",async(req,res)=>{
    product = await productSchema.find({item_name:"Maxbell usb rechargable"}).lean().exec();
    res.render("productPage",product)
})
router.get("/Data6",async(req,res)=>{
    product = await productSchema.find(req.params.id).lean().exec();
    res.render("productPage",product)
})
router.post("/",async(req,res)=>{
    user = await productSchema.create(req.body);
    res.status(200).json({data:user})
})

module.exports = router