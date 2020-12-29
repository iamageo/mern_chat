const mongoose = require ('mongoose');
const User = mongoose.model('User');
const sha256 = require('js-sha256')
const jwt = require('jwt-then')

exports.register = async(req, res) => {
    const {name, email, password} = req.body;
    const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(emailRegex.test(email)) throw "Email is not supported from your domain";
    if(password < 5) throw "Password must be alteadt 5 characters long."


    const userCheck = await User.findOne({
        email, 
    });
    
    if(userCheck) throw "User with email already exists"

    const user = new User({
        name, 
        email, 
        password: sha256(password + process.env.SALT)});

    await user.save();

    res.json({
        message: "user ["  + name + "] registred successfull"
    })
}


exports.login = async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({
        email, 
        password: sha256(password + process.env.SALT),
    });
    
    if(!user) throw "Email did not match"

    const token = await jwt.sign({id: user.id}, process.env.JWT_SECRET)
    
    res.json({
        message: "User logged in successfully",
        token,
    })
}
