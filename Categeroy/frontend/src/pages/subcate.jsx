import React, { useEffect, useState } from 'react'
import Base_url from '../Baseurl'
import axios from 'axios'

const Subcate = () => {
      const [getcategory,Setgetcategory] = useState([])
      const [category,Setcategory] = useState("")
      const [subcategory,Setsubcategory] = useState("")

      const finalsubmit=async()=>{
          let api = `${Base_url}user/subcategory`
          try {
            const respo = await axios.post(api,{category:category,subcategory:subcategory})
            // console.log(respo.data)
            alert(respo.data.msg)
          } catch (error) {
            // console.log(error)
            alert(error.respo.data.msg)
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

      const ans = getcategory.map((key)=>{
          return(
            <>
            <option value={key._id} > {key.category}</option>
             
            </>
          )
      })

    useEffect(()=>{
       loaddata()
    },[])
  return (
   <>
     <div style={{margin:"40px"}}>
                    <select  onChange={(e)=>{Setcategory(e.target.value)}} >
                    <option >select</option>
                    {ans}
                </select>

                subcategory:<input type='text' onChange={(e)=>{Setsubcategory(e.target.value)}}  />
                <button onClick={finalsubmit}>add</button>
     </div>
     
   </>
  )
}

export default Subcate