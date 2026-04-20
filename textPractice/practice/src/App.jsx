
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Dispaly from './Pages/Dispaly'
import Reduxpract from './Pages/Reduxpract'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout/>}> 
         <Route index element={<Home/>}/>
         <Route path='home' element={<Home/>}/>
         <Route path='about' element={<About/>}/>
         <Route path='redux-practice' element={<Reduxpract/>}/>
         <Route path='display/:id' element={<Dispaly/>}/>
         </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
