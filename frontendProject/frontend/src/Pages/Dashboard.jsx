import React from 'react'
import Button from 'react-bootstrap/Button';
import { Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
     const navigate = useNavigate()
  return (
   <>
       <h1>Welcome to admin dashboard</h1>
    <div style={{display:"flex"}}>
         <div>
               
                <Button variant="primary" onClick={()=>{navigate("edit")}}>Edit</Button> <br /> <br />
                <Button variant="secondary" onClick={()=>{navigate("display")}}>Display</Button> <br /> <br />
                 <Button variant="success" onClick={()=>{navigate("insert")}}>Insert</Button>
         </div>

          <div>
           <Outlet/>
          </div>


      </div>
      
   </>
  )
}

export default Dashboard