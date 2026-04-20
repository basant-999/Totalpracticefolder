import React, { useState } from 'react'
import { MdSearch } from "react-icons/md";


const Searchinput = () => {
  const [collob,setcollob] = useState(false)
  console.log(collob)
  return (
  <>
       <div className={`w-full flex items-center border hover:border-[#0a2ac7] rounded  border-[rgba(165,166,171,1)]  bg-[rgba(245,245,245,0.96)]`}>
        <div className={` relative  w-56   `} >

            <input onClick={()=>setcollob(!collob)} type="text" placeholder='search.......' className={`  pl-10 py-2  font-roboto  outline-none
               
              `}  />

               <div  onClick={()=>setcollob(!collob)}
                className={`cursor-pointer p-2 absolute top-1 transition-all duration-300 ease-in-out
                  ${collob?'right-4':'left-2'}
                `}>
                  <MdSearch  size={18}/>
               </div>

         </div>
           
           

          
       </div>
  </>
  )
}

export default Searchinput