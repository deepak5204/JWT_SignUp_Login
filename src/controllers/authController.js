const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

//create token by .sign() method
const signToken = (id) => {
    return jwt.sign(
        {id},
        process.env.JWT_SECRET, 
        // { expiresIn: process.env.JWT_EXPIRES_IN }
    );
}

exports.signup = async(req, res) => {
    const { name, email, password,confirmPassword,  profile } = req.body;
    const newUser = await User.create({
        name,
        email,
        password,
        confirmPassword,
        profile
    });

    console.log(newUser);

    const token = signToken(newUser._id) 
    console.log(token);
    res.status(201).json({
        status: 'success',
        token,
        newUser
    })
};

