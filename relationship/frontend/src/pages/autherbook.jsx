import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Api_url from '../Baseurl';

const Autherbook = () => {

    const [data,setData] = useState([]);
    const {id} = useParams()
      const load=async()=>{
        // console.log(id);

        const res = await axios.post(`${Api_url}/author/autherdata`,{autherId:id})
        console.log(res.data);
        setData(res.data);

      }

      useEffect(()=>{
        load()
      },[])
  return (
    <>
    <div>autherbook</div>
    <div>
        {
            data.map((key)=>{
                return(
                    <>
                        <h3>{key.bookname}</h3>
                        <h4>{key.bookprice}</h4>
                    </>
                )
            })
        }
        
    </div>
    </>
  )
}

export default Autherbook