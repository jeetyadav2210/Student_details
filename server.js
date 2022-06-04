var express = require('express');
var app = express();
app.use(express.json())

// define routes here..
var addstudend = require("./studendragisterapi")
var infostudent = require("./studentinfo")

app.use("/", infostudent)
app.use("/", addstudend);


var server = app.listen(6000, function() {
    console.log('Node server is running..');
});