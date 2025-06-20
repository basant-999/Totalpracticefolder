
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Insert from './pages/Insert'
import Display from './pages/Display'
import Search from './pages/Search'
import Edit from './pages/edit'


function App() {


  return (
    <>
     <BrowserRouter>
       <Routes>
              <Route path='/' element={<Layout/>}>
              <Route index element={<Insert/>}/>
              <Route path='insert' element={<Insert/>}/>
              <Route path='display' element={<Display/>}/>
              <Route path='search' element={<Search/>}/>
              <Route path='edit/:id' element={<Edit/>}/>
              </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
