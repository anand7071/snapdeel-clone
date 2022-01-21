const express = require("express");


const connect = require("./config/mongoDB");
const UserControllar = require("./controllar/User.cont")
const SubmitionCont = require("./controllar/submistion.cont")
const StudentCont = require("./controllar/student.cont")
const EvalCont = require("./controllar/student.cont")
const loginCont = require("./controllar/login.cont")

const app = express();
app.use(express.json());
app.use("/user",UserControllar);
app.use("/submition",SubmitionCont );
app.use("/student",StudentCont );
app.use("/evaluation",EvalCont );
app.use("/login",loginCont );


start = ()=>{app.listen(2345, async (req,res)=>{
    await connect();

    console.log("Port 2345");

})}

module.exports = start
