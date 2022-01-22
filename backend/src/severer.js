const express = require("express");
const path = require("path")
const hbs = require("hbs")


const connect = require("./config/mongoDB");
const itemsControllar = require("./controllar/items.cont")
const templates_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")


const app = express();
app.use(express.json());
app.set("view engine","hbs")
app.set("views",templates_path)
hbs.registerPartials(partials_path)

app.get("/",(req,res)=>{
    res.render("index")
})
app.use("/items",itemsControllar);


start = ()=>{app.listen(2345, async (req,res)=>{
    await connect();

    console.log("Port 2345");

})}

module.exports = start
