import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
const Reduxpract = () => {
    const cartvalue = useSelector((state)=>state.cart.maincart)
    console.log(cartvalue)
  return (
   <>
      <div style={{color:"white", backgroundColor:"black",height:"100px", width:"100px"}}>
          {cartvalue.length}
        </div> 
   </>
  )
}

export default Reduxpract