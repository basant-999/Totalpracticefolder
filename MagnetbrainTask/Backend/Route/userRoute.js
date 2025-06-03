const express = require("express")
const route = express.Router()
const userControler = require("../Controller/userController")

route.post("/userlogin",userControler.Userlogin)
route.post("/signup",userControler.Signup)
route.post("/CartItems",userControler.CartItems)
route.get("/userauthentication",userControler.userAuthentication)
module.exports = route