import { createSlice } from "@reduxjs/toolkit";


const mySlice = createSlice({
    name:"count",
    initialState:{
        value:0
    },
    reducers:{
        inc:(state,actions)=>{
            state.value=state.value+1
        },
        dec:(state,actions)=>{
            if(state.value >=1){
                state.value=state.value-1
            }
            
        }
    }
})

export const {inc,dec} = mySlice.actions
export default mySlice.reducer