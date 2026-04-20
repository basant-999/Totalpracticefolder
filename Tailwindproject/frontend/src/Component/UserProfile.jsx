import React from 'react'

const UserProfile = () => {
  return (
   <>
       <div className='flex items-center px-3 gap-3 hover:border-[#0a2ac7]   border border-[rgba(165,166,171,1)]  bg-[rgba(245,245,245,0.96)] rounded '>
            <div className=' h-8 w-8  flex rounded-full overflow-hidden'>
               <img className=' w-full h-full object-cover ' src="https://truckcdn.cardekho.com/in/eicher/pro-3018-plus/eicher-pro-3018-plus-48285.jpg" alt="" />
            </div>
            <div>
                <div className='text-[12px]'>Username</div>
                <div className='text-[12px]' >Admin</div>
            </div>
       </div>
   </>
  )
}

export default UserProfile