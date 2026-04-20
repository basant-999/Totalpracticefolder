const mongoose = require("mongoose")

const UserScema = new mongoose.Schema({
        email:String,
        Password:String

})

module.exports=mongoose.model("User",UserScema)