const express = require("express");
const route = express.Router();
const StoreController = require("../controller/Storecon");
const upload = require("../middleware/multer");

// Store Signup
route.post("/storesignup", StoreController.Storesignup);

// Store Login
route.post("/storelogin", StoreController.Storelogin);

// Insert Store (with image upload)
route.post("/insertstore", upload.array("store", 5), StoreController.Insertstore);

// Get All Store Data
route.get("/getstoredata", StoreController.Getstoredata);

route.post("/storeproduct",upload.array("product",5),StoreController.Storeproduct)

module.exports = route;
