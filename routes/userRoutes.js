
const express = require("express");
var app=express();
const router = express.Router()
const mongoose= require('mongoose');
const User=require('../model/User');
//var bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}));
// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

  router.get('/insert', function(req,res) {
    res.render('users/adduser.ejs');
});

// router.get('/', function(req,res) {
//     res.render('users/listusers.ejs');
// });

router.post('/insert',function(req,res){
   // res.send("hello")
   
    console.log(req.body)
    
    const user = new User({
        	        firstname: req.body.firstname,
        	        lastname: req.body.lastname,
        	        email: req.body.email,
        	       
        	       password:req.body.password
        	    });
        	    // save new user in db
                user.save().then((docs)=>{
       
                   
                    //   return res.status(200).json({
                    //       message:'Data inserted successfully',
                    //       success:true,
                    //       data:docs
                    //   })
                      res.redirect("/users")
                  })
                
                  .catch((err)=>{
                      return res.status(401).json({
                          message:'Error in adding new user',
                          success:false,
                          error:err.message
                      })
                  });
        	});





// Get All data from users
router.get('/',function(req,res){
    
    //res.send("Hello, welcome in ekarma hisar ")
    User.find().then(result=>{
        console.log(result);
        console.log("Record Fetched!");
        res.render('users/listusers.ejs',{userData:result});

    //  res.status(200).json({
    //     message:'Data Fetched successfully',
    //    userData:result
    //   })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
        error:err
        })
       
    })

});

// Get single record;

router.get('/users/:id',function(req,res){
     let id=req.params.id
    console.log(id)
    //res.send("Hello, welcome in ekarma hisar ")
    User.findById(id).then(result=>{
        console.log(result);
        console.log("Record Fetched!");
        //res.render('viewEmployee.ejs',{userData:result});

     res.status(200).json({
        message:'Data Fetched successfully',
       userData:result
      })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
        error:err
        })
       
    })

});


// Delete user Record

router.get('/delete/:id', (req, res) => {
  // res.send("Record Deleted")
  let id=req.params.id
  console.log(id)
  User.deleteOne({_id:req.params.id}).then(result=>{
            console.warn(result);
    //         res.status(200).json({
    // msg:"Record Deleted",
    // res:result
  //})
    res.redirect('/users');

   
        }).catch(err=>{
            console.log(err);
            res.status(500).json({
    
                error:err
            })
        })
})
  

// update a record

router.post('/update/:uid', (req, res) => {
    //res.send("record updated")
    console.log(req.params.uid)
    User.findByIdAndUpdate(({_id:req.params.uid}),{
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password
        
    },(err,result)=>{
        if(err){
            res.json({msg:err.msg});
        }else{
         res.json({
                      message:'Data updated successfully',
                      success:true,
                      data:result
                  })
           
        }
    });   
})

module.exports = router