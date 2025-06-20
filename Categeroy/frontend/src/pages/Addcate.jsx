import React, { useState } from 'react'
import Base_url from '../Baseurl'
import axios from "axios"
const Addcate = () => {
    const [input,Setinput] = useState("")

    const submit=async()=>{
         const api = `${Base_url}user/addcategory`
         try {
            const respone = await axios.post(api,{category:input})
            console.log(respone.data)
            alert(respone.data.msg)
         } catch (error) {
            console.log(error)
         }
    }
  return (
    <>
    <div style={{margin:"40px"}}>
          Enter category  <input type='text' value={input} onChange={(e)=>{Setinput(e.target.value)}} /> 
          <button onClick={submit}>Add</button>
    </div>
   
    </>
  
  )
}

export default Addcate