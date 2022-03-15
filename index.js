var express=require('express');
var app=express();

const mongoose = require("mongoose");
//var bodyParser = require('body-parser')
require('./config');
const User=require('./model/User');
const Employee=require('./model/Employee');
const empRoute=require('./routes/employeesRoutes');
const userRoute=require('./routes/userRoutes');
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}));
//app.use(bodyParser.urlencoded({ extended: false }));


app.use('/employees',empRoute);

app.use('/users',userRoute);
// app.get('/data',function(req,res)
// {
// res.send('Hello World! The entire Pro Git book written by Scott Chacon and Ben Straub is available to read online for free. Dead tree versions are available on Amazon.com.');
// });





var server=app.listen(5000,function() {
    console.log("server is running at 5000 port no")
});
