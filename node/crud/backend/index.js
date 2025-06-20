
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const  UserRoute = require("./Route/userRoute")
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_URl).then(()=>{
    console.log("database add ")
})

 app.use("/user",UserRoute)
const port = 8000
app.listen(8000,()=>{
     console.log(`server run on port ${port}`)
})