const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
         _id:mongoose.ObjectId,
         
     ename : { type : String, required : true, max : [127, "Max Length is 127 characters"] },
    age : { type : Number, required : true},
     email:{type:String,required:true,unique: true},
    salary : Number,
     designation : { type : String, required : true},
   
    date: { type: Date, default: Date.now },
    });



    module.exports = mongoose.model('Employee', employeeSchema);
    
