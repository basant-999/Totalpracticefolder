import React, { useEffect, useState } from 'react'
import Base_url from '../Baseurl'
import axios from 'axios'

const Display = () => {
    const [displaydata,Setdisplaydata] = useState([])
    const loaddata=async()=>{
        let api = `${Base_url}user/displaydata`
        try {
             const respo = await axios.get(api)
             console.log(respo.data)
             Setdisplaydata(respo.data)
        } catch (error) {
             console.log(error)
        }
    }

    useEffect(()=>{
        loaddata()
    },[])
    


  return (
    <>
      <table>
        <thead>
            <tr>
                <th> category</th>
                <th>subcategory</th>
                <th>name</th>
                <th>price</th>
                <th>disp</th>
            </tr>
        </thead>
        <tbody>
         {
            
         }
        </tbody>
      </table>
    </>
  )
}

export default Display