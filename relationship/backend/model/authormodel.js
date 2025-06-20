const mongoose = require("mongoose")
const authorModel = new mongoose.Schema({
    name:String,
    city:String,
    email:String,
    
})

module.exports = mongoose.model("authormodel",authorModel)