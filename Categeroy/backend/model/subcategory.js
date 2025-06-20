const mongoose = require("mongoose")
const Subcategorymodel  = new mongoose.Schema({
     

    category : String,
    subcategory :String,
    categoryId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addcategory"

    }
})

module.exports = mongoose.model("subcategory",Subcategorymodel)