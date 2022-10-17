const mongoose = require("mongoose")

const veriSchema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const VeriModel = new mongoose.model("Verify",veriSchema)

module.exports = VeriModel