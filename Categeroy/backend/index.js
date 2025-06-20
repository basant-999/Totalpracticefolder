
require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const CatRoute = require("./route/route")
const mongoose = require("mongoose")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = process.env.Port
const dbcon=process.env.DB_url
mongoose.connect(dbcon).then(()=>{
      console.log("databaseconted good")
})
app.use(cors())

app.use("/user",CatRoute)
app.listen(port,()=>{
   console.log(`server run om port ${port}`)
})