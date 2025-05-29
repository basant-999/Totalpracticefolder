import {configureStore} from "@reduxjs/toolkit"
import todo from "./Createslice"
const store = configureStore({
    reducer:{
        todo:todo
    }
})
export default store