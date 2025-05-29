import Layout from "./Layout"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Display from "./pages/Display"



function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="display" element={<Display/>}/>
                
            </Route>
         </Routes>
      </BrowserRouter>
     </>
  )
}

export default App
