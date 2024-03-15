const User = require('../models/UserModel');


exports.signup =async(req, res) => {
    const { name, email, password,confirmPassword,  profile } = req.body;
    const newUser = await User.create({
        name,
        email,
        password,
        confirmPassword,
        profile
    });

    // const token = signToken(newUser._id) 
    res.status(201).json({
        status: 'success',
        newUser
    })
};

