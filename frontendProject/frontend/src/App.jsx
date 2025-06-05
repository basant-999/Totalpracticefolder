
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Layout from "./Layout"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"
import Insert from "./Pages/Insert"
import Display from "./Pages/Display"

function App() {

  return (
    <>
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<Signup/>}/>


                </Route>
            </Routes>

             <Routes>
                <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="insert" element={<Insert/>}/>
                <Route path="display" element={<Display/>}/>
                   
                </Route>
             </Routes>
         </BrowserRouter>
    </>
  )
}

export default App
