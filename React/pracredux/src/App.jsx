
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { inc,dec } from './Slice'

const App = () => {
    const counter = useSelector((state)=>state.count.value)
    const dispatch = useDispatch()
  return (
   
    <>
    <div >
        {counter%2==0?<div style={{backgroundColor:"red",width:"40px",height:"40px"}}></div> : <div style={{backgroundColor:"green",width:"40px",height:"40px"}}></div>}
    </div>
    <br />
    <button onClick={()=>dispatch(inc())}>add</button> 
    {counter}
    <button onClick={()=>dispatch(dec())}>munis</button>
    </>
  )
}

export default App