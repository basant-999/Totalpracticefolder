import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name:"addtocart",
    initialState:{
         cart:[],
    },
    reducers:{
        addtocart:{
            
        }

    }

   
})

export default cardSlice.reducer
 export const{addtocart} = cardSlice.actions