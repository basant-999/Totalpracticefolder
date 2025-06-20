require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
const AuthorRoute = require("./route/authorroute")
const { default: mongoose } = require("mongoose")
app.use(cors())
    
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/author",AuthorRoute)

const dbcon = process.env.db_con
const port = process.env.port
mongoose.connect(dbcon).then(()=>{
  console.log("databaseconected")
})
app.listen(port,()=>{
  console.log(`server run on port ${port}`)
})