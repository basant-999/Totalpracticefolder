import React from 'react'
import Layout from './Layout'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home'

const App = () => {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Layout/>} >
          <Route index element={<Home/>}/>
            <Route path='home' element={<Home/>}/>

          </Route>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App