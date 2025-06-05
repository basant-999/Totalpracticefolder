const express = require("express")
const route = express.Router()
const contactController = require("../Controller/contactController")
route.post("/usercontact",contactController.Usercontact)

module.exports = route