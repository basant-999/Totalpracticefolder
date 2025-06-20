
import './App.css'
import Layout from './Layout'
import Display from './pages/Display'
import Home from './pages/Home'
import Search from './pages/Search'
import {BrowserRouter ,Route,Routes} from "react-router-dom"

function App() {


  return (
    <>
      <BrowserRouter>
         <Routes>
              <Route path="/" element={<Layout/>}>
              <Route  index element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="display" element={<Display/>}/>
              <Route path="search" element={<Search/>}/>
                 
              </Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
