const express = require("express");
var app=express();
const router = express.Router()
const mongoose= require('mongoose');
const employee=require('../model/Employee');
//var bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}));

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

  router.get('/', (req, res) => {
    res.send('Birds home page')
  })

 // Add Employee 

   router.post("/add",(req, res) => {
     console.log(req.body)
//     console.log(req.file)
  
var myData=new employee({
    _id: new mongoose.Types.ObjectId(),
    ename:req.body.ename,
    age:req.body.age,
    email:req.body.email,
    salary:req.body.salary,
    designation:req.body.designation,
    
    
   });
   
   myData.save().then((docs)=>{
   
   
    //  return res.status(200).json({
    //      message:'Data inserted successfully',
    //      success:true,
    //      data:docs
    //  })
   res.redirect('/employees');
   
   })
   
   .catch((err)=>{
    return res.status(401).json({
        message:'Error in adding new user',
        success:false,
        error:err.message
    })
   });

});

module.exports = router