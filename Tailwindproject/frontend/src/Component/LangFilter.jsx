import React, { useState } from 'react'
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";

const options = ['option1','option2','option3']
const LangFilter = () => {
    const [open,setopen] = useState(false)
  return (
   <>
       <div className={`flex items-center   gap-3 px-3 py-2 border rounded  bg-[rgba(245,245,245,0.96)] ${ open?'border border-[#0a2ac7]':'border border-[rgba(165,166,171,1)]'}`}>
                <div className={`english-text font-roboto `}>English</div>
                <div className='cursor-pointer transition-all ease-in-out' onClick={()=>setopen(!open)}>
                    {
                        open?( <IoIosArrowUp />):(<IoIosArrowDown />)
                    }
                </div>

                {

                 open&&

                <div className='absolute z-50 bg-[rgba(255,255,255,1)] mt-40 rounded-[8px_8px_16px_16px]  shadow-[0_1px_10px_0_rgba(0,0,0,0.25)] border border-[rgba(165,166,171,1)]'>
                     {
                        options.map((e)=>(
                            <div  className="px-3 py-2 font-inter text-[rgba(98,98,98,1)] text-[14px] leading-[150%] tracking-[0px] cursor-pointer">
                               {e }
                            </div>
                        ))
                     }
                </div>
                  }
       </div>
   </>
  )
}

export default LangFilter