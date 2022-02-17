const mongoose = require('mongoose');

const connect = () =>{
    return mongoose.connect('mongodb://127.0.0.1:27017/SnapdeelItems');
    // return mongoose.connect('mongodb://localhost:27017/mpl_clone');
}

module.exports = connect;