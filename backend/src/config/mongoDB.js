const mongoose = require("mongoose")

const connect = ()=>{

    try {
        return mongoose.connect("mongodb://127.0.0.1:27017/SnapdeelItems")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect