const mongoose = require("mongoose")

// creating schema
const contactSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    }

})

// creating model

const Contact = new mongoose.model("Contact",contactSchema)
module.exports = Contact

