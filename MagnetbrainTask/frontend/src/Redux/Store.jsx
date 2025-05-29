import {configureStore} from "@reduxjs/toolkit"
import addtocart from "./CardSlice"

 const store = configureStore({
         reducer:{
           addtocart:addtocart
         }
 })
 export default store