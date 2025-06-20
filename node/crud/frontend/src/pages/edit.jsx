import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import API_BASE from '../Base_url'
import axios from 'axios'
const Edit = () => {
  const[edit,Setedit] = useState({})
  let {id} = useParams()
  const loaddata=async()=>{
    let api = `${API_BASE}user/editshow`
    try {
      const respon = await axios.post(api,{workid:id})
      console.log(respon.data)
      Setedit(respon.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handlesubmit=(e)=>{
     let name = e.target.name
     let value = e.target.value
     Setedit(val=>({...val,[name]:value}))
     console.log(edit)
  }

  const finalSubmit=async()=>{
      let api = `${API_BASE}user/editsave`
      try {
         const respo = await axios.post(api,edit)
         alert(respo.data.msg)
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(()=>{
      loaddata()
  },[])
  return (
  <>
     <div>
          <h1>edit your data</h1>
          <input type="text" placeholder='inter you name'name='name' value={edit.name} onChange={handlesubmit}/> <br />
        <input type="email" placeholder='inter your email' name="email" value={edit.email}onChange={handlesubmit} /> <br />
        <input type="text" placeholder='inter your city' name='city' value={edit.city}onChange={handlesubmit}/> <br />
        <button onClick={finalSubmit}>submit</button>
     </div>
  </>
    
  )
}

export default Edit