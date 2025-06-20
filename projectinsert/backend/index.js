
require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path");
const StoreRoute = require("./route/StoreRoute");
const { default: mongoose } = require("mongoose");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));

const db = process.env.DB_URL
mongoose.connect(db).then(()=>{
   console.log("conted db sss")
})

app.use("/store",StoreRoute)
const port = process.env.PORT

app.listen(port,()=>{
   console.log(`server run on port${port}`)
})
