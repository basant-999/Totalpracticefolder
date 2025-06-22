import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Base_url from '../Base_url'


const Home = () => {
    const [getstoredata,Setgetstoredata] = useState([])
  const loaddata=async()=>{
  
    let api = `${Base_url}store/getstoredata`
    try {
       const respo = await axios.get(api)
       console.log(respo.data)
       Setgetstoredata(respo.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
     loaddata()
  },[])

  const ans = getstoredata.map((store)=>{
      console.log("Image path:", store.defaultimage);
    return(<>
       <div className="col-md-4 mb-4">
  <div className="card shadow-sm">
    <img
      src={`${Base_url}${store.defaultimage}`} // ✅ backend se image path
      className="card-img-top"
      alt={store.storename}
      style={{ height: "200px", objectFit: "cover" }}
    />
    <div className="card-body">
      <h5 className="card-title">{store.storename}</h5>
      <p className="card-text"><strong>Location:</strong> {store.location}</p>
      <p className="card-text"><strong>Variety:</strong> {store.variety}</p>
      <a href="#" className="btn btn-primary w-100">View More</a>
    </div>
  </div>
</div>
        
    </>)
  })
  return (
   <>
     <div className="container mt-4">
    <div className="row">
      {ans}
    </div>
  </div>
     
   </>
  )
}

export default Home