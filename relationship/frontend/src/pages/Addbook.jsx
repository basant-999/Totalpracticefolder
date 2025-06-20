import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Api_url from '../Baseurl'
import { useNavigate } from 'react-router-dom'

const Addbook = () => {
    const [mydata,Setmydata] = useState([])
    const navigate = useNavigate()
    const loaddata=async()=>{
      let api = `${Api_url}/author/authorshow`
      try {
        const respo = await axios.get(api)
        console.log(respo.data)
        Setmydata(respo.data)
      } catch (error) {
        console.log(error)
      }
    }

  

    const ans = mydata.map((key)=>{
         return(
            <>
              <tr>
                 <td>{key.name}</td>
                 <td>{key.city}</td>
                 <td>{key.email}</td>
                 <td><button onClick={()=>{navigate(`/newbook/${key._id}`)}} >addbook</button></td>
              </tr>
            </>
         )
    })

      useEffect(()=>{
       loaddata()   
    },[])
  return (
   <>
    <table id='addbooktable'>
         <thead>
              <tr>
                 <th>NAME</th>
                 <th>CITY</th>
                 <th>EMAIL</th>
                 <th>addbook</th>
              </tr>
         </thead>

         <tbody>
             {ans}
         </tbody>
    </table>

   </>
  )
}

export default Addbook