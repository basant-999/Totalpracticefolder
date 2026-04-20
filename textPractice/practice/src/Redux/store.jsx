import {configureStore} from "@reduxjs/toolkit"
import cart from "./CartSlice"
const store = configureStore({
    reducer:{
         cart:cart
    }
})

export default store 