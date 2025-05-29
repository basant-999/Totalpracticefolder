import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./Slice"
const store = configureStore({
    reducer:{
       count:counterSlice
    }
})

export default store