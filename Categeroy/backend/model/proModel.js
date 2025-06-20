const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
  disp: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "addcategory"
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subcategory"
  }
})

module.exports = mongoose.model("product", ProductSchema)
