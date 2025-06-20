const mongoose = require("mongoose")

const Storemodel = new mongoose.Schema({
      ownerName:String,
      storeName:String,
       address:String,
       password:String,
       email:String
})

module.exports = mongoose.model("Store",Storemodel)