import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Base_url from '../Config/Base_url';

const Orders= () => {
     const [mydata, setMydata] = useState([]);

    const loadData = async()=>{
        const api = `${Base_url}/admin/displaypayment`;
        try {
          const response = await axios.get(api);
          console.log(response.data);
          setMydata(response.data);
        } catch (error) {
          console.log(error)
        }
      }
    
    useEffect(()=>{
      loadData();
    },[]);


      const ans = mydata.map((key)=>{
        return(
          <>
          <tr>
            <td>
            {key.products.map((e)=>{
              return(
                <>
                <tr>
                  <th>{e.name}</th>
                </tr>
                </>
              )
            })}
            </td>
            <td>{key.amount}</td>
            <td>{key.createdAt}</td>
            <td>{key.status}</td>
          </tr>
          </>
        )
      })

  return (
   <>
       <h1 style={{backgroundColor:"lightpink", padding:"20px", textAlign:"center", textTransform:"uppercase"}}>Orders details</h1>
          
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Total Amount</th>
              <th>Order Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ans}
            </tbody>
      </Table>
   </>
  )
}

export default Orders