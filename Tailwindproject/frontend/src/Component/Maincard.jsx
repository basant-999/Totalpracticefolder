import React from 'react'
 const topcard =[
        {
            title:"Total Users",
            subtitle:"123456789",
            icon:"12"
        },
         {
            title:"TOTAL BUSINESS",
            subtitle:"15",
            icon:"basant"
        },
         {
            title:"TOTAL INDIVIDUALS",
            subtitle:"5",
            icon:"basant"
        },
         {
            title:"ACTIVES Vehicle OWNERS",
            subtitle:"15",
            icon:"basant"
        }
    ]
const Maincard = () => {

   
  return (
    <>
       <div className='flex-row gap-1'>
           {
            topcard.map((key)=>{
                return(
                    <>
                      <div className=' flex-1 justify-between '>
                           <div>{key.title}</div>
                           <div>{key.subtitle}</div>
                           <div>{key.icon}</div>
                      </div>
                    </>
                )
            })
           }
       </div>
    </>
  )
}

export default Maincard