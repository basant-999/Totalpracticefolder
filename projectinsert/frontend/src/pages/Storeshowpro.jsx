

import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Base_url from '../Base_url'

const Storeshowproduct = () => {
    const StoreId = useParams()
    const getStoreAllData=async()=>{
      const response = await axios.get(`${Base_url}store/getStoreAllData/${StoreId}`)
      console.log(response.data);
    }
  useEffect(()=>{
    getStoreAllData()
  },[])
  return (
    <>
     {/* <div>StoreDetails {id}</div> */}
         <div>store</div>
    </>
        
       )
    }

export default Storeshowproduct

