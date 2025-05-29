import { BrowserRouter, Route,Routes } from "react-router-dom"
import Topnav from "./Component/Topnav"
import "App.css"


function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Topnav/>}>

          </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
