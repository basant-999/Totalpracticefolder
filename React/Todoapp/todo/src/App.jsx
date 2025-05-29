
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { addtodo ,delet,editTodo} from './Createslice'
import { useState } from 'react'
function App() {
const dispatch =useDispatch()
const select = useSelector(state=>state.todo.values)
// console.log(select
const [input , setInput] = useState("")
const [edit,setEdit] = useState(false);
const [editId,setEditId] = useState("");
  return (
    <>
    <h1> Add your Work</h1>
     Todo: <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
     {
     edit ?
     <button onClick={()=>dispatch(editTodo({id:editId,newtxt:input}),setInput(""),setEdit(false))}>Update</button>
      : 
     <button onClick={()=>dispatch(addtodo({text:input,id:Date.now()}),setInput(""))}>add</button>
     }
     
     {/* <button onClick={handelAdd}>{edit ? " update" : "Add"}</button> */}
     
     <br />
     <div>
      {
        select.map(key=>{
          return(
            <>
            <li key={key.id}>  <span >{key.text}</span>
              <button onClick={()=>dispatch(delet(key.id))}>delete</button>
              <button onClick={()=>(setEditId(key.id),setEdit(true),setInput(key.text))}>edit</button></li>
             
            </>
          )
        })
      }
     </div>
   
    </>
  )
}

export default App
