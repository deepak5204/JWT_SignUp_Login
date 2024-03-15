
const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter your name']
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please enter confirm password']
    },
    profile: {
        type: String,
        default: 'USER',
    },
    isActive: {
        type: Boolean,
        default: false
    }
})


const User = mongoose.model('User', userSchema);

module.exports = User;
