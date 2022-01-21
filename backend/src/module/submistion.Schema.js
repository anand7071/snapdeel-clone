
const mongoose = require("mongoose");

const submistionSchema = new mongoose.Schema({   
    evaluation_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"evaluations",
        required:true
    }],
    answerd_by:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"students",
        required:true
    }],
    status:{type: String, required: true,default:"pending"},
    Submition_time:{type: Date, required: true,default:"pending"},
    score:{type:Number,required:false},
    assesed_by :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:false
    }],
    submistion_link:{type:String,required:false}
    },
    {
    timestamps:true,
    versionKey:false,
    })

const submistionSc = mongoose.model("submistion",submistionSchema)

module.exports= submistionSc