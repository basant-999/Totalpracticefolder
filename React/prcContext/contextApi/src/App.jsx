

 
import { useContext } from 'react'
import './App.css'
import Usercontext from './Context'
function App() {
 
  const {user,logout,log,setlog} =  useContext(Usercontext)
  console.log(log)
  const login=()=>{
    setlog(!log)
  }
  return (
    <>
     <h1> practise api </h1>
    {user.name}
    <button onClick={logout}>logout</button>
    <button onClick={login}>{log?"logout":"login"}login</button>
    </>
  )
}

export default App
