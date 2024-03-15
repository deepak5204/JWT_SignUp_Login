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

    const user = await User.findOne({email});
    if(user){
        res.status(400).json({
            staus: false,
            message: 'User already registered, Please Login......'
        })
    }

    const newUser = await User.create({
        name,
        email,
        password,
        confirmPassword,
        profile
    });

    console.log(token);
    res.status(201).json({
        status: 'success',
        newUser
    })
};



// User login
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
  
    //1. check if email and password exist
    if(!email || !password) {
        res.status(400).json({
            staus: false,
            message: 'Please provide email or password'
        })
    }
  
    //2. check if user exists && password is correct
    const user = await User.findOne({ email: email }).select("+password");

    if (!user || !(user.password === password)) {
      res.status(400).json({
        staus: false,
        message: 'Incorrect email or password'
    })
    }
  
    //3. if everything is ok, send token to client
    const token = signToken(user._id);
    res.status(200).json({
      stauts: "success",
      token,
    });
  };
  