import {configureStore} from "@reduxjs/toolkit"
import addtocart from "./CreateSlice"

 const store = configureStore({
         reducer:{
           addtocart:addtocart
         }
 })
 export default store