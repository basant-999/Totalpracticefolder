
require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path");
const StoreRoute = require("./route/StoreRoute");
const UserRoute = require("./route/userRoute")
const { default: mongoose } = require("mongoose");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));

const db = process.env.DB_URL
mongoose.connect(db).then(()=>{
   console.log("conted db sss")
})

app.use("/store",StoreRoute)
app.use("/user",UserRoute)
const port = process.env.PORT

app.listen(port,()=>{
   console.log(`server run on port${port}`)
})
