import { createSlice } from "@reduxjs/toolkit";


const TodoSlice = createSlice({
    name:"todo",
    initialState:{
        values:[]
    },
    reducers:{
          addtodo:(state,action)=>{
            // console.log(action.payload);
            if(action.payload==""){
                return alert("Enter text")
            }

           state.values.push(action.payload)
            

          },
          delet:(state,action)=>{
            //  console.log(action.payload)
             state.values= state.values.filter(key=>key.id!=action.payload)
          },
          editTodo:(state,action)=>{
                // console.log(action.payload);
                const {id,newtxt} = action.payload;
                const isExisit = state.values.find(key=> key.id === id)
                
                if(isExisit){
                    isExisit.text = newtxt;
                }
          }
    }
})
export const{addtodo,delet,editTodo} = TodoSlice.actions
export default TodoSlice.reducer