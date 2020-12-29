const mongoose = require ('mongoose');
const User = mongoose.model('User');
const sha256 = require('js-sha256')

exports.register = async(req, res) => {
    const {name, email, password} = req.body;
    const emailRegex = /[@gmail.com|@yahoo.com|@hotmail.com|@outlook.com|@live.com]$/

    if(!emailRegex.test(email)) throw "Email is not supported from your domain";
    if(password < 5) throw "Password must be alteadt 5 characters long."

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

}