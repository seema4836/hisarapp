const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstname: { 
            type: String, 
            required: 'First Name is required'
        }, 
        lastname: { 
            type: String, 
            required: 'Last Name is required'
        }, 
        email: {
            type: String,
            require: 'Email is required',
            unique: true
        },
        password: { 
            type: String, 
            required: 'Password is required'
        }
       
    }, 
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;