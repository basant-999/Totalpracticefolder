const mongoose = require ("mongoose")
const userModel = new mongoose.Schema({
    name:String,
    email:String,
    city:String
})

module.exports = mongoose.model("user",userModel)