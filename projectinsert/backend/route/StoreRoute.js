const express = require("express");
const route = express.Router();
const StoreController = require("../controller/Storecon");
const upload = require("../middleware/multer");
const ValidationStore = require("../middleware/validation");
const {StoresignupValidation} = require("../middleware/StoreSignupVali");
// Store Signup
route.post("/storesignup",ValidationStore(StoresignupValidation), StoreController.Storesignup);

// Store Login
route.post("/storelogin", StoreController.Storelogin);



route.post("/storeproduct",upload.array("product",5),StoreController.Storeproduct)
route.get("/updatestoredata/:id",StoreController.Updatestoredata),
route.post("/finalstoreupdate", upload.array("storeImages", 5), StoreController.Finalstoreupdate);
route.get("/getstoredata",StoreController.Getstoredata);
route.get("/getStoreAllData/:id",StoreController.GetStoreAllData);


module.exports = route;
