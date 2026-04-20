import React, { useEffect, useState } from 'react'
import Images from './ImagesObject'
const LoginSlider = () => {

    const Slides = [
         {
            image:Images.eicher1,
            heading:"Big dream to big support",
            subheading:"Choice depends to sucess"
         },
          {
            image:Images.eicher2,
            heading:"Big dream to big support",
            subheading:"Choice depends to sucess"
         },
          {
            image:Images.eicher3,
            heading:"Big dream to big support",
            subheading:"Choice depends to sucess"
         },
          {
            image:Images.eicher4,
            heading:"Big dream to big support",
            subheading:"Choice depends to sucess"
         },
    ]

    const [currentValue,setcurrentValue] = useState(0)
    useEffect(()=>{
          const timer = setInterval(()=>{
                 setcurrentValue((bk)=>(bk+1)%Slides.length)
          },3000)

          return()=>clearInterval(timer)
    },[])
  return (
  <>
        {/* <div>
              <img src={Slides[currentValue].image} alt="" />    simple krne ke liye 
        </div> */}

        <div className='w-full h-full relative overflow-hidden'>
              {
                Slides.map((kk,index)=>(
                    <div
                       key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentValue ? 'opacity-100' : 'opacity-0'
                    }`}
                    >
                         <img src={kk.image} alt=""
                         className='w-full h-full object-cover'
                          />

                         <div className='absolute inset-0   flex items-center justify-center text-center px-4   '>
                              <div>
                                <h1 className='text-3xl text-white md:text-4xl font-bold'>{kk.heading}</h1>
                                <p className='text-white'>{kk.subheading}</p>
                              </div>
                         </div>
                    </div>

                    
                ))
              }
             
               {/* ===========  dots ============= */}
                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {
                     Slides.map((_,idx)=>(
                        <div
                          className={`h-2 w-2 rounded-full transition-all duration-300 ${idx===currentValue ?  'bg-white w-4': 'bg-gray-400'}`}
                        >
                             
                        </div>  
                     ))
                  }
               </div>


        </div>
     
  </>
  )
}

export default LoginSlider