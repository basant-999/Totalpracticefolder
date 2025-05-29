import Usercontext from "./UserContext";

import React, { useState } from 'react'

const Userprovider = ({children}) => {
    const [log,setlog] = useState(false)
    const user = {name:"basant", role:"admin",email:"bk@112"}

    const logout =()=>{
        console.log("log out")
    } 
  return (
   <>
     <Usercontext.Provider value={{user,logout,log,setlog}}>
         {children}
     </Usercontext.Provider>
   </>
  )
}

export default Userprovider