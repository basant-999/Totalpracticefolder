import React from 'react'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import UserLogin from './Imp/UserLogin'
import Display from './Component/Display'

const  RoutesFile = () => {
  return (
    <>
         <BrowserRouter>
           <Routes>
                      <Route path='/' element={<UserLogin/>}/>
                      <Route path='dashboard' element={<Display/>}/>   
           </Routes>

         </BrowserRouter>
    </>
  )
}

export default RoutesFile