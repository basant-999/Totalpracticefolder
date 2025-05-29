import {configureStore} from "@reduxjs/toolkit"
import cardReducer from "./Cardslice"
const store = configureStore({
     reducer:{
         Addtocard:cardReducer
     },
})

export default store