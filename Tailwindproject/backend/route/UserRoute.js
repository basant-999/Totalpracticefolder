const express = require("express")
const  UserController  = require("../controller/UserCont")
const LoginAuthMiddleware = require("../middleware/AuthLoginMiddleware")
const route = express.Router()

route.post("/userlogin",UserController.UserLogin)
route.get("/dashboard", LoginAuthMiddleware,(req,res)=>{
    res.send({
        msg: "Dashboard access granted",
        user: req.user
    })
})

module.exports=route