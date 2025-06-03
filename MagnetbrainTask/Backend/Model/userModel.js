const mongoose = require("mongoose")
const userModel = new mongoose.Schema({
    name:String,
    city:String,
    email: String,
    password:String,
cartItem: [
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Insert" },
    quantity: { type: Number, default: 1 }
  }
]
})

module.exports = mongoose.model("user",userModel)