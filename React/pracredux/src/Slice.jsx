 import {createSlice} from "@reduxjs/toolkit"

 const countSlice = createSlice({
    name:"count",
    initialState:{value:0},
    reducers:{
          inc:(state)=>{state.value += 1},
          dec:(state)=>{state.value += -1}
    }
 })

 export const {inc,dec} = countSlice.actions

 export default countSlice.reducer