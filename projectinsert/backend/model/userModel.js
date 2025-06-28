const mongoose = require("mongoose")
const UserModel = mongoose.Schema({
        username: String,
        address: String,
        email: String,
        password: String

})
module.exports=mongoose.model("usermodel",UserModel)