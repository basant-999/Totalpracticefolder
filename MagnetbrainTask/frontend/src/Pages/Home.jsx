import React, { useEffect, useState } from 'react'
import Base_url from '../Config/Base_url'
import axios from 'axios'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { addtocart } from '../Redux/CardSlice';
import { useDispatch } from "react-redux";


const Home = () => {
  const [getdata,Setgetdata] = useState([])

  const dispatch = useDispatch()

  // user Authentication=====================
  const userAuthentication=async()=>{
        try {
                const token = localStorage.getItem("token")
            if(token){
              let api = `${Base_url}/user/userauthentication`
              const response = await axios.get(api,{
                headers:{
                  Authorization:`Bearer ${token}`
                }
              })
              // console.log(response.data)
              localStorage.setItem("userName",response.data.name)
            }
        } catch (error) {
           console.log(error)
        }
  }
 
  const loadData=async()=>{
     let api = `${Base_url}/admin/dispaydata`
     try {
        const response = await axios.get(api)
        console.log(response.data)
        Setgetdata(response.data)
        // console.log(getdata)
     } catch (error) {
      console.log(error)
     }
  }
  const handleUserCart=async(p)=>{
    
    await axios.post(`${Base_url}/user/CartItems`,{CartId:p,UserId:localStorage.getItem("UserId")})
  }

  useEffect(()=>{
    loadData()
    userAuthentication()
  },[])

   const ans = getdata.map((key)=>{
             return(<>
                  <Card className="m-3 shadow-sm" style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={`${Base_url}${key.defaultImage}`}
        alt={key.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> ₹{key.price} <br />
          <strong>Brand:</strong> {key.brand}
        </Card.Text>
      </Card.Body>
         <Button variant="success" type='button' onClick={()=>{dispatch(addtocart({...key,quanty:1})),handleUserCart(key._id)}}>Addtocart</Button>
    </Card>
             </>)
   })
  return (
     <>
        {ans}
     </>
  )
}

export default Home