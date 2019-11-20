

const express = require("express");
const mysql = require("mysql");



const app = express();

var emprouter = require("./emp");

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/emp",emprouter);

app.listen(4000,function(){
    console.log("server started.....");
})

















































