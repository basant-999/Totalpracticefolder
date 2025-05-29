import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
 <>
     <div style={{display:"flex",textDecoration:"none",listStyle:"none"}}>
         <li><Link to="home">Home</Link></li> /
         <li><Link to="about">about</Link></li>/
         <li><Link to="display">display</Link></li>
     </div>

     <br />

     <Outlet/>
    

 </>
  )
}

export default Layout