import { createContext, useContext, useState,  } from "react";
const usercontext = createContext()


 export const Cardprovider=({children})=>{
    const [card,Setcard] = useState([])
     console.log(card)
    const addtocart =(product)=>{
           Setcard(pre=>[...pre,product])
         
    }
      return(
        <usercontext.Provider value={{card,addtocart}}>
           {children}
        </usercontext.Provider>
      )
}
 
export const usecard=()=>useContext(usercontext)

export default usercontext