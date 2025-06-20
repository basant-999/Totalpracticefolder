const mongoose = require("mongoose")
const Bookmodel = new mongoose.Schema({
    bookname:String,
    bookprice:String,
    authorid:{
      type: mongoose.Schema.Types.ObjectId,
        ref:"authormodel"
    }

})

module.exports = mongoose.model("book",Bookmodel)