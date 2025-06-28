const express = require("express")
const route = express.Router()
const userController = require("../controller/userCont")

route.post("/usersignup",userController.Usersignup)
route.post("/userlogin",userController.Userlogin)

module.exports= route