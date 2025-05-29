import React from 'react'
import { useState } from 'react'

const Home = () => {
    const [input,Setinput] = useState({})
     const handlesubmit=(e)=>{
      let name = e.target.value
      let value = e.target.value
          Setinput (val=>({...val,[name]:value}))
          console.log(input)
     }
     const finalsub=()=>{
         

     }
  return (
     <form>
         name: <input type="text" name='text' onChange={handlesubmit} /> <br />
         email: <input type="email" name='email' onChange={handlesubmit} /><br />
         paas:  <input type="password" name='password'  onChange={handlesubmit}  /> <br />
         <button onClick={finalsub}>submit</button>
     </form>
  )
}

export default Home