import { createSlice } from "@reduxjs/toolkit";

const Cardslice = createSlice({
     name:"addtocart",
     initialState:{
          cart:[],
          
     },
     reducers:{
          addtocart:(state,action)=>{
               state.cart.push(action.payload) 
               console.log(action.payload)
            //    const exitszitem = state.cart.find(item=>item._id === action.payload._id)
            //    if(!exitszitem){
            //         state.cart.push(action.payload)
            //    }else{
            //         alert("product alredy added")
            //    }
          },
        //   incrementqut:(state,action)=>{
        //        const item = state.cart.find(item=>item._id===action.payload)
        //        if(item){
        //             item.quanty+=1;
        //        }
        //   },
        //   dicrementqut:(state,action)=>{
        //        const item = state.cart.find(item=>item._id===action.payload)
        //        if(item && item.quanty>1){
        //             item.quanty -=1;
        //        }
        //   },
        
     }
})

export const{addtocart}= Cardslice.actions
export default Cardslice.reducer