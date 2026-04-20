import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <div className='flex justify-between bg-amber-800 text-amber-50 p-2 text-3xl'>
            <div>
              <Link to={"home"}>Home</Link>
               
            </div>
            <div>
              <Link to={"about"}> about</Link>
              
            </div> 
            <div>
              <Link to={"display"}>  display</Link>
            
            </div>
        </div>

        <Outlet/>
    </>
  )
}

export default Layout