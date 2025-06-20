import React, { useState } from 'react'
import API_BASE from '../Base_url'
import axios from 'axios'

const Search = () => {
  const [val,Setval] = useState("")

  const searchdata=async()=>{
    let api = `${API_BASE}user/search`
    try {
      const respo = await axios.post(api,{name:val})
      console.log(respo.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
     Enter name: <input type="text" onChange={(e)=>Setval(e.target.value)} /> <br />
     <button onClick={searchdata}>search</button>
    </>
  )
}

export default Search