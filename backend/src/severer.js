const express = require("express");



const connect = require("./config/mongoDB");
const itemsControllar = require("./controllar/items.cont")



const app = express();
app.use(express.json());

app.use("/items",itemsControllar);


start = ()=>{app.listen(2345, async (req,res)=>{
    await connect();

    console.log("Port 2345");

})}

module.exports = start
