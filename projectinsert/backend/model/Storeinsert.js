const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  storename: { type: String, required: true },
  location: { type: String, required: true },
  variety: { type: String, required: true },
  defaultimage: { type: String },
  image: [{ type: String }]
});

module.exports = mongoose.model("storeinsert", StoreSchema);
