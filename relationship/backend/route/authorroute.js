const express = require("express")
const route = express.Router()
const Authorcontroller = require("../controller/authorcont")

route.post("/inserdata",Authorcontroller.Inserdata)
route.get("/authorshow",Authorcontroller.Authorshow)
route.post("/addbook",Authorcontroller.Addbook)
route.get("/bookdata",Authorcontroller.Bookdata)
route.post("/autherdata",Authorcontroller.Authordata)

module.exports = route