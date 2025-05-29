const express = require("express")
const route = express.Router()
const paymentRoute = require("../Controller/payementContro")

route.post("/create-checkout-session",paymentRoute.createCheckoutSession)


module.exports = route