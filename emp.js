// const express = require("express");
// const mysql = require("mysql");

// const emprouter = express();

// var myData = [];
// var connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'manager',
//     database:'mean'
// });

// connection.connect();

// emprouter.get("/",function(request,response){
//     connection.query("select * from emp",function(err,result){
// if(err == null)
// {
//     myData = result;
//     response.contentType("application/json");
//     response.send(JSON.stringify(myData));
// }
// else
// {
//     response.send("something went wrong");
// }
//     });

// });

// module.exports = emprouter;

















const express =require("express");
const mysql =require("mysql");

const emprouter = express();

var myData = [];

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'mean'


});

connection.connect();

emprouter.get("/",function(request,response){
    connection.query("select * from emp",function(err,result){
        if(err == null)
        {
            myData=result;
            response.contentType("application/json");
            response.send(JSON.stringify(myData));
        }
        else
        {
         response.send("something went wrong");
        }

    });

});

module.exports=emprouter;



