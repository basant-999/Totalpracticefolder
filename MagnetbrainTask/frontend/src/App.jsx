
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './Layout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Admindashbord from './Admin/Admindashbord'
import Insertdata from './Admin/Insertdata'
import Manage from './Admin/Manage'
import Orders from './Admin/Orders'
import CartInsert from './Redux/CartInsert'
import Checkout from './Redux/Checkout'
import Success from './Redux/Suceess'
import Cancel from './Redux/Cancel'

function App() {
 

  return (
    <>
      <BrowserRouter>
         <Routes>
             <Route path='/' element={<Layout/>}>
             <Route index element={<Home/>}/>
             <Route path='home' element={<Home/>}/>
             <Route path='about' element={<About/>}/>
             <Route path='contact' element={<Contact/>}/>
             </Route>
         </Routes>

         <Routes>
             <Route path='admindashboard' element={<Admindashbord/>}>
             <Route path='insert' element={<Insertdata/>}/>
             <Route path='manage' element={<Manage/>}/>
             <Route path='orders' element={<Orders/>}/>
             </Route>
         </Routes>

         <Routes>
            <Route path='cartinter' element={<CartInsert/>}/>
            <Route path='checkout' element={<Checkout/>}/>
            <Route path='success' element={<Success/>}/>
            <Route path='cancel' element={<Cancel/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
