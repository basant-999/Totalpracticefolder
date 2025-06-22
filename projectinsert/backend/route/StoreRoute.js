const express = require ("express")
const route = express.Router()
const StoreController = require("../controller/Storecon")
const upload = require("../middleware/multer")

route.post("/storesignup",StoreController.Storesignup)
route.post("/storelogin",StoreController.Storelogin)
route.post("/insertstore",upload.array("pictures",5),StoreController.Insertstore)
route.get("/getstoredata",StoreController.Getstoredata)
module.exports = route