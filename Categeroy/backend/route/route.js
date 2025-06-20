const express = require("express")
const route = express.Router()
const UserController = require("../controller/controll")

route.post("/addcategory",UserController.Addcategory)
route.get("/getcategory",UserController.Getcategory)
route.post("/subcategory",UserController.Subcategory)
route.get("/getsubcategory",UserController.Getsubcategory)
route.post("/saveproduct",UserController.Saveproduct)
route.get("/displaydata",UserController.Displaydata)
module.exports = route