import React from 'react'
import Searchinput from './Searchinput'
import { FaBell } from "react-icons/fa6";
import LangFilter from './LangFilter';
import UserProfile from './UserProfile';
import Maincard from './Maincard';


const Topbar = () => {
  return (
       <>
          <div className='flex justify-between items-center pr-4 pl-4 '>
               <div className=''>
                    <div className='text-black text-[16px] font-bold'>manage vehicle</div>
                    <div className='text-2xl  font-bold text-black'>eicher vecv</div>
               </div>

               <div className='flex justify-between items-center w-[40%]'>
                   <div><Searchinput/></div>
                   <div><LangFilter/></div>
                   <div className='relative'>
                     <FaBell className=' text-[rgba(231,157,157,0.96)]' size={36} />
                     <div className='bg-red-700 w-3  h-3 rounded-full absolute top-1 right-1'>
                         
                     </div>
                   </div>
                  
                   <div><UserProfile/></div>
               </div>

             
          </div>

            <Maincard/>
       </>
  )
}

export default Topbar