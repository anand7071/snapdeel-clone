
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({   
    name: { type: String, required: true },
    email:{type:String,required:true},
    password:{type:String,required:true},
    profile_photo:{type:String,required:true},
    roles:[{
        type:String,
        required:true
    }]
    },
    {
    timestamps:true,
    versionKey:false,
    })

const UserSc = mongoose.model("user",UserSchema)

module.exports= UserSc