const mongoose = require("mongoose")
const a = mongoose.connect("mongodb://localhost:27017/details").then(()=>
console.log("connection successful")).catch((err)=> console.log("failed"))

