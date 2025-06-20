import { useState } from "react"
import Usercontext from "./Context"

Usercontext
const Provider =({children})=>{
    const [log,setlog] = useState(false)
    const user = {name:"basant",age:"30"}
    const logout =()=>{
        console.log("logout")
    } 
    return(
        <Usercontext.Provider value={{user,logout,log,setlog}}>

          {children}
        </Usercontext.Provider>
    )
}
export default Provider