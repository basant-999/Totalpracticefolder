
require("dotenv").config()
const express = require("express")
const UserRoute = require("./route/UserRoute")
const mongoose = require("mongoose")
const cors = require("cors")

const app =express()


const port = process.env.port
const db = process.env.db_url
mongoose.connect(db).then(()=>{
    console.log("taiwind database contected sucuss!!!!!!!!!!!")
})

app.use(cors())
app.use(express.json())
app.use("/user",UserRoute)
app.listen(port,()=>{
    console.log(`server rum on port ${port}`)
})