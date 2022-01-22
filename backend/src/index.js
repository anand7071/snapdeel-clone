const express = require("express");
const mongoose = require("mongoose");

const start = require("./severer");

const app = express();
app.use(express.json());


start()




