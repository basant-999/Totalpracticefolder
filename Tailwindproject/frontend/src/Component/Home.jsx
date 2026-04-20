import React from 'react'

const Home = () => {
  return (
    <>
      <div className=' fixed inset-0 bg-[rgba(54,54,54,0.44)]  flex justify-center items-center shadow-[0px_1px_14.9px_0px_rgba(255,255,255,0.83)]'>

        <div className='w-[400px] p-6 bg-white max-w-[90%] relative rounded-2xl shadow-[0px_1px_14.9px_0px_rgba(255,255,255,0.83)]'>
              <button className='top-4 absolute right-6 text-[30px] text-[rgba(43,53,177,1)]  hover:text-gray-700  '>X</button>
              <h2 className='mb-4 font-bold text-2xl'>Delete Vehicle</h2>
              <hr className='mb-4' />
              <p className='mb-6 text-center'> Are you sure you want to delete the selected vehicle from the list?</p>

              <div className='flex flex-col font-serif gap-3'>
                  <button className='w-full bg-red-500 hover:bg-red-700 transition-colors duration-700 ease-in-out py-2 text-amber-50 rounded font-medium'>Delete</button>
                  <button className='w-full bg py-2 bg-gray-500 hover:bg-gray-800 transition-colors duration-700 ease-in-out text-amber-50 rounded font-medium'>Cencle</button>
              </div>
        </div>
          
      </div>
    </>
  )
}

export default Home