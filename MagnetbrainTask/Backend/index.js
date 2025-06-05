
require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const AdminRoute = require("./Route/adminRoute")
const Paymentroute = require("./Route/paymentRoute")
const UserRoute = require("./Route/userRoute")
const ContactRoute = require("./Route/contactRoute")
const path = require("path")



app.use(cors())
app.use("/uploads",express.static(path.join(__dirname,"multer/uploads")))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.DB_URl).then(()=>{
    console.log("database connected")
})

app.use("/admin",AdminRoute)
app.use("/payment",Paymentroute)
app.use("/user",UserRoute)
app.use("/contact",ContactRoute)

const port = 8080
app.listen(port,()=>{
    console.log(`server on poert ${port}`)
})