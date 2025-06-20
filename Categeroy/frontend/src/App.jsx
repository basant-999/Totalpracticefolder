
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Addcate from './pages/Addcate'

import Subcate from './pages/subcate'
import Pro from './pages/pro'
import Display from './pages/Display'

function App() {


  return (
    <>
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Addcate/>}/>
            <Route path='category' element={<Addcate/>}/>
            <Route path='subcategory' element={<Subcate/>}/>
            <Route path='pro' element={<Pro/>}/>
            <Route path='display' element={<Display/>}/>


            </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
