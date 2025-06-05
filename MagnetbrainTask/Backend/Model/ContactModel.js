const mongoose = require("mongoose")
const contactModel = new mongoose.Schema({
     name: String,
     email:String,
     message:String,
     createdAt:{
        type:Date,
        default:Date.now
     }
})

module.exports = mongoose.model("contact",contactModel)