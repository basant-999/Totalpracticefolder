import React, { useEffect, useState } from 'react'
import API_BASE from '../Base_url'
import axios from 'axios'
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Display = () => {
     const navigate = useNavigate()
    const [getdata,Setgetdata] = useState([])
     const loadData =async()=>{
        let api = `${API_BASE}user/display`
        try {
             const respo = await axios.get(api)
            //  console.log(respo.data)
            Setgetdata(respo.data)
        } catch (error) {
            console.log(error)
        }
     }

     const deletehandle=async(id)=>{
    let api = `${API_BASE}user/delete/?workid=${id}`
    try {
        const respo = await axios.get(api)
        console.log(respo.data)
    } catch (error) {
        console.log(error)
    }

}


 const editdata=(id)=>{
     navigate(`/edit/${id}`)
 }

     useEffect(()=>{
     loadData()
     },[])

      
     const ans = getdata.map((key,index)=>{
        
        return(
            <>
            <tr>
                <td>{index+1}</td>
                 <td>{key.name}</td>
                 <td>{key.email}</td>
                 <td>{key.city}</td>
                <td><MdDeleteForever onClick={()=>{deletehandle(key._id)}}/></td>
                <td><MdEdit onClick={()=>{editdata(key._id)}}/></td>
            </tr>
             
            </>
        )
     })
  return (
    <>
     <table border="2px">
         <thead>
             <tr>
                 <th>NO.</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>CITY</th>
                <th>DELETE</th>
                <th>EDIT</th>
             
             </tr>
         </thead>
         <tbody>
             {ans}
         </tbody>
     </table>
    </>
  )
}

export default Display