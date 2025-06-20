const mongoose = require("mongoose")
const Addcategorymodel  = new mongoose.Schema({
    category:String
})

module.exports = mongoose.model("addcategory",Addcategorymodel)