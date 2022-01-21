
const mongoose = require("mongoose");

const SignIn = new mongoose.Schema({   
    sing_in:{
        ref:"users",
        required:true
    }
    },
    {
    timestamps:true,
    versionKey:false,
    })

const UserSc = mongoose.model("user",SignIn)

module.exports= UserSc