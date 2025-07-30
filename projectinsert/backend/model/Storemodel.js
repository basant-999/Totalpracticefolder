const mongoose = require("mongoose")

const Storemodel = new mongoose.Schema({
      ownerName:String,
      storeName:String,
       address:String,
       password:String,
       email:String,
       StoreProducts:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"storeproduct"
       }],
          phone: String,
          city: String,
          state: String,
          pincode: String,
          description:String,
          category: String,
          StoreImg:String
          })

module.exports = mongoose.model("Store",Storemodel)