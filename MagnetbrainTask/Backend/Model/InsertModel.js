
const mongoose = require("mongoose")

const Insermodel = new mongoose.Schema({
            name: String,
            price: String,
            brand: String,
            defaultImage:String,
            image:[String]
            
})

module.exports = mongoose.model("Insert",Insermodel)