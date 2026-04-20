import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const PracticeTest = () => {
  const [product,Setproducts] = useState([])
   useEffect(()=>{
        axios.get("https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd")
        .then(res=>res.data)
        .then(data=>Setproducts(data))
        .catch(err=>console.log("server error",err))
    },[])
    // console.log(products)
  return (
  <>
       <h1>practice </h1>


  </>
  )
}

export default PracticeTest