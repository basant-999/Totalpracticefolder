

import { useState } from 'react'
import './App.css'

function App() {
  const [input,Setmyinput] = useState("")

    const handlesubmit=(e)=>{
           let name= e.target.name
           let value=e.target.value

           Setmyinput(val=>({...val,[name]:value}))
           console.log(input)
    }

      const finalSubmit=()=>{
           
      }

  return (
    <>
      Input: <input type="text" name='task' onChange={handlesubmit} />
      <select name="tasktype" id="" onChange={handlesubmit}>
         <option disabled >select your work</option>
         <option value="">js</option>
         <option value="">html</option>
         <option value="">react</option>

      </select>
      <button onClick={finalSubmit}>add</button>
    </>
  )
}

export default App
