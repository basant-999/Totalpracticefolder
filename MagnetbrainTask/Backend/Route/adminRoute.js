const express = require("express")
const route = express.Router()
const AdminController = require("../Controller/adminController")
const upload = require("../multer/multer")

route.post("/adminlogin",AdminController.AdminLogin)
route.post("/insertdata",upload.array("upload",5),AdminController.InsertData)
route.get("/dispaydata",AdminController.Dispaydata)
route.get("/displaypayment",AdminController.Displaypayment)
module.exports = route