const express = require ("express")
const route = express.Router()
const StoreController = require("../controller/Storecon")

route.post("/storesignup",StoreController.Storesignup)
route.post("/storelogin",StoreController.Storelogin)

module.exports = route