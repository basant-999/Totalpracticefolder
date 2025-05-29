import {configureStore} from "@reduxjs/toolkit"
import counter from "./cartSlice"

const store = configureStore({
    reducer:{
     basant:counter
    }
})

export default store