import React, { useState } from 'react'
import Api_url from '../Baseurl'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Newbook = () => {
  const [bookname,Setbookname]  = useState("")
  const [bookprice,Setbookprice] = useState("")
  const {id} = useParams()
  const finalsubmit=async()=>{
     let api = `${Api_url}/author/addbook`
     try {
       const respo = await axios.post(api,{bookname,bookprice,id})
       console.log(respo.data)
     } catch (error) {
      console.log(error)
     }
  }
  return (
    <>
    <div id='addbook'>
           bookname:<input   onChange={(e)=>{Setbookname(e.target.value)}} /> <br />
          bookprice<input onChange={(e)=>{Setbookprice(e.target.value)}}/> <br />
          <button onClick={finalsubmit}>addbook</button>
    </div>
   
    </>
  )
}

export default Newbook