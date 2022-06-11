var express = require('express');
var app = express();
app.use(express.json())

// define routes here..
var addstudend = require("./studendragisterapi")
var infostudent = require("./studentinfo")
var Studentattendence = require("./attendanceStudents")



app.use("/", infostudent);
app.use("/", addstudend);
app.use("/", Studentattendence);

var server = app.listen(6000, function() {
    console.log('Node server is running..');
});