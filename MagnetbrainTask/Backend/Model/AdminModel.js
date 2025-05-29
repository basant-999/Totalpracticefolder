const mongoose = require("mongoose")

const Adminmodel = new mongoose.Schema({
     Email : String,
     Password : String,
     name:String

})

module.exports = mongoose.model("Admin",Adminmodel)