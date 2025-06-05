import { createSlice } from "@reduxjs/toolkit";

const Cardslice = createSlice({
     name:"addtocart",
     initialState:{
          cart:[],
          username:"",
     },
     reducers:{
          addtocart:(state,action)=>{
               // state.cart.push(action.payload) normal add krne ke liye
               const exitszitem = state.cart.find(item=>item._id === action.payload._id)
               if(!exitszitem){
                    state.cart.push(action.payload)
               }else{
                    alert("product alredy added")
               }
          },
          incrementqut:(state,action)=>{
               const item = state.cart.find(item=>item._id===action.payload)
               if(item){
                    item.quanty+=1;
               }
          },
          dicrementqut:(state,action)=>{
               const item = state.cart.find(item=>item._id===action.payload)
               if(item && item.quanty>1){
                    item.quanty -=1;
               }
          },
          removefromcart:(state,action)=>{
               state.cart = state.cart.filter(item=>item._id !==action.payload)
          },
          setUserName:(state,action)=>{
               state.username=action.payload;
               // console.log(action.payload);
          }
     }
})

export const{addtocart,incrementqut,dicrementqut,removefromcart,setUserName}= Cardslice.actions
export default Cardslice.reducer