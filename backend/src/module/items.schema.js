
const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({   
    item_name: { type: String, required: true },
    item_img_path:{type:String,required:true},
    price:{type:Number,required:true},
    discription: { type: String, required: false },
    highlights:[{
        type:String,
        required:false
    }]
    },
    {
    timestamps:true,
    versionKey:false,
    })

const itemsSc = mongoose.model("items",itemsSchema)

module.exports= itemsSc