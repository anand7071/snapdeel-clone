
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({   
    student_code: { type: String, required: true },
    batch: { type: String, required: true },
    current_status:{type:String,required:true , default:"active"},
    
    student_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    }]
    },
    {
    timestamps:true,
    versionKey:false,
    })

const StudentSc = mongoose.model("student",StudentSchema)

module.exports= StudentSc