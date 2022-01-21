
const mongoose = require("mongoose");

const EvaluationSchema = new mongoose.Schema({   
    title: { type: String, required: true },
    start_date:{type: Date, required: true},
    end_date:{type: Date, required: true},
    created_by:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    }]
    },
    {
    timestamps:true,
    versionKey:false,
    })

const EvaluationSc = mongoose.model("evaluation",EvaluationSchema)

module.exports= EvaluationSc