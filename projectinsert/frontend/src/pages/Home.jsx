import React, { useEffect, useState } from 'react'
import Base_url from '../Base_url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const [getdata,Setmygetdata] = useState([])
  const loadData=async()=>{
          const api = `${Base_url}store/getstoredata`;
          try {
            const respo = await axios.get(api)
            console.log(respo.data)
            Setmygetdata(respo.data)
          } catch (error) {
            console.log(error)
          }
    
  }

  useEffect(()=>{
    loadData()
  },[])

  const ans = getdata.map((key)=>{
      return(
        <>
           <div className="card m-3" style={{ width: '22rem' }} onClick={()=>{navigate(`/storeshowproduct/${key._id}`)}}>
  <img
    src={`${Base_url}${key.StoreImg}`}
    className="card-img-top"
    alt={key.storeName}
  />
  <div className="card-body" >
    <h5 className="card-title">{key.storeName}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{key.email}</h6>
    <p className="card-text">
      <strong>Address:</strong> {key.address}
    </p>
    <p className="card-text">
      <strong>Rating:</strong> ⭐
    </p>
    <button className="btn btn-primary">open</button>
  </div>
</div>

           
        </>
      )
  })
  return (
       <>
          {ans}
       </>
  )
}

export default Home