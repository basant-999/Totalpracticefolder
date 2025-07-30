const mongoose = require("mongoose")
const Storeproduct = new mongoose.Schema({
      name:{type:String,required:true},
      price:{type:Number,required:true},
      description:{type:String,required:true},
      image:[{type:String,require:true}],
      store_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Store",
        required:true
      }

})
module.exports = mongoose.model("storeproduct",Storeproduct)