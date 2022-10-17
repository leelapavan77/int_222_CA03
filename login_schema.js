const mongoose = require("mongoose")

const logins = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    rpassword:{
        type:String,
        required:true
    }
})

// creating models

const LoginModel = new mongoose.model("LoginRecord",logins)
module.exports = LoginModel