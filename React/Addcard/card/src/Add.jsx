import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addToCart, removeCart } from './Cardslice'
const Add = () => {
    const dispatch = useDispatch()
    const pro = useSelector(state=>state.Addtocard.cardItem)
    const cartvale = useSelector(state=>state.Addtocard.value);
  return (
  <>
  <div>
    cart:{cartvale}
    {
      pro.map(key=>{
        return(
          <>
           <h3>{key.name}</h3>
           <h4>${key.price}</h4>
           <button onClick={()=>dispatch(removeCart(key.name))}>Remove</button>
           <br />
          </>
        )
      })
    }
       
       <button onClick={()=>dispatch(addToCart({name:"sali",price:143}))}>Addtocart</button>
  </div>
  </>
  )
}

export default Add