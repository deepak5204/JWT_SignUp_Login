
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter your name']
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false
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
