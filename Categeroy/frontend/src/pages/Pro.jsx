import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Base_url from '../Baseurl'
import { useEffect } from 'react'

const Pro = () => {
          const [getcategory,Setgetcategory] = useState([])
          const [getsubcategory,Setgetsubcategory] = useState([])

          const [inputdata,Setinputdata] = useState({})
          const [category,Setcategory] = useState("")
          const [subcategory,Setsubcategory] = useState("")
         const handlesubmit=(e)=>{
            let name = e.target.name
            let value = e.target.value
            Setinputdata(val=>({...val,[name]:value}))
            console.log(inputdata)
         }
       
       
         const finalsubmit=async()=>{
            try {
               let api = `${Base_url}user/saveproduct`
               const respo = await axios.post(api,{...inputdata,category,subcategory})
               console.log(respo.data)
            } catch (error) {
               console.log(error)
            }
         }

   const loaddata=async()=>{
        let api = `${Base_url}user/getcategory`
        try {
            const respo = await axios.get(api)
            // console.log(respo.data)
            Setgetcategory(respo.data)
        } catch (error) {
            console.log(error)
        }
    }

    const loaddatasub=async()=>{
      const api = `${Base_url}user/getsubcategory`
      try {
        const respo = await axios.get(api)
        console.log(respo.data)
        Setgetsubcategory(respo.data)
      } catch (error) {
        console.log(error)
      }
    }
      const ans = getcategory.map((key)=>{
          return(
            <>
            <option value={key._id} > {key.category}</option>
             
            </>
          )
      })

      const ans2 =getsubcategory.map((item)=>{
             return(
              <>
               <option value={item._id}>{item.subcategory}</option>
              </>
             )
      }) 

    useEffect(()=>{
       loaddata()
       loaddatasub()

    },[])
  return (
    <>
      <div style={{margin:"40px"}}>
             <select   onChange={(e)=>{Setcategory(e.target.value)}}  >
                    <option >select</option>
                    {ans}
              </select>

                <select  onChange={(e)=>{Setsubcategory(e.target.value)}}>
                  <option>select</option>
                     {ans2}
                </select>
      </div>

      <div>
         <input type="text" name='name' onChange={handlesubmit}/><br />
         <input type="text" name='price'  onChange={handlesubmit} /> <br />
         <input type="text" name='disp'  onChange={handlesubmit} /> <br />
         <button onClick={finalsubmit}>add</button>
      </div>
    
    </>
  )
}

export default Pro