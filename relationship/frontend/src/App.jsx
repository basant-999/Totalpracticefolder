
import './App.css'
import Layout from './Layout'
import {BrowserRouter,Route,Routes} from "react-router-dom"


import Display from './pages/Display'
import Insert from './pages/Insert'
import Home from './pages/home'
import Addbook from './pages/Addbook'
import Newbook from './pages/newbook'
import Autherbook from './pages/autherbook'
function App() {

  return (
    <>
 
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Insert/>}/>
          <Route path='insert' element={<Insert/>}/>
          <Route path='display' element={<Display/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='addbook' element={<Addbook/>}/>
          <Route path='newbook/:id' element={<Newbook/>}/>
          <Route path='authorbook/:id' element={<Autherbook/>}/>


          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
