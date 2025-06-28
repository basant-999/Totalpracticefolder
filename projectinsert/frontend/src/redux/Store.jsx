import {configureStore} from "@reduxjs/toolkit"
import addtocart from "../redux/Createslice"
const store = configureStore({
    reducer:{
      addtocart:addtocart
    }
})

export default store