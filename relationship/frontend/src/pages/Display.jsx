import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Api_url from '../Baseurl'

const Display = () => {
  const [data ,setData] = useState([]);
  const load=async()=>{
    const res = await axios.get(`${Api_url}/author/bookdata`)
    setData(res.data);
    console.log(res.data);
  }
  useEffect(()=>{
    load();
  },[])
  return (
    <div>Books</div>

  )
}

export default Display