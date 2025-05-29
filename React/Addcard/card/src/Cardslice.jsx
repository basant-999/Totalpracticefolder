import {createSlice} from "@reduxjs/toolkit"

const Ecardslice = createSlice({
    name:"Addtocard",
    initialState:{
        cardItem:[],
        value:0
    },
    reducers:{
        addToCart:(state,action)=>{
            const item = action.payload
            console.log(item)
            state.cardItem.push({...item})
            state.value +=1;
        },
        removeCart:(state,action)=>{
            state.cardItem = state.cardItem.filter(key=>key.name != action.payload)
            state.value -=1;
            if(state.cardItem.length == 0){
                state.value = 0;
            }
        }
    }
})

export const {addToCart,removeCart} = Ecardslice.actions

export default Ecardslice.reducer