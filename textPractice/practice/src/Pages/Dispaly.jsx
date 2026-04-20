import React, { useReducer } from 'react'
import { useParams } from 'react-router-dom'

const Dispaly = () => {
    const {id} = useParams()
    console.log(id)

    const bgcolor=(state,action)=>{
         switch(action){
            case"redcolor":
            return state="red"
              case"yellowcolor":
            return state="yellow"
              case"blackcolor":
            return state="black"
              case"bluecolor":
            return state="blue"

            default : return state
         }
    }

    const [color,mycolor] = useReducer(bgcolor,"green")
    console.log(color)
  return (
    <>
    <div>Dispaly {id}</div>

    {/* ============================useReducer====================== */}

    <h1> useReducer hook </h1>

    <button onClick={()=>{mycolor("redcolor")}}>red</button>
    <button onClick={()=>{mycolor("yellowcolor")}}>yellow</button>
    <button onClick={()=>{mycolor("pinkcolor")}}>pink</button>
    <button onClick={()=>{mycolor("blackcolor")}}>black</button>
    <button onClick={()=>{mycolor("bluecolor")}}>blue</button>
    

    <div style={{ height:"100px", backgroundColor:color}}>
         
    </div>
      
    </>
  )
}

export default Dispaly