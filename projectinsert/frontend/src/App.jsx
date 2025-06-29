
import './App.css'
import Layout from './Layout'
import Display from './pages/Display'
import Home from './pages/Home'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Inser from './pages/Inser'
import StoreAdmin from './StoreOwner/StoreAdmin'
import InsertStore from './StoreOwner/InsertStore'
import Reviews from './StoreOwner/Reviews'
import AvgRating from './StoreOwner/AvgRating'
import Storelogin from './StoreOwner/Storelogin'
import Storesignup from './StoreOwner/Storesignup'
import StoreDetails from './pages/StoreDetails'
import StoreProducts from './StoreOwner/StoreProducts'
function App() {

  return (
    <>

     <BrowserRouter>
        <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="insert" element={<Inser/>}/>
                    <Route path="display" element={<Display/>}/>
                    <Route path='storedetails/:id' element={<StoreDetails/>}/>
                    
             </Route>
        </Routes>

        <Routes>
             <Route path='storedashboard' element={<StoreAdmin/>} >
                <Route path='insert' element={<InsertStore/>}/>
                <Route path='reviews' element={<Reviews/>}/>
                <Route path='avgrating' element={<AvgRating/>}/>
                <Route path='storeproducts' element={<StoreProducts/>}/>
             </Route>
        </Routes>

        <Routes>
           <Route path='store-login' element={<Storelogin/>}/>
           <Route path='store-signup' element={<Storesignup/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
