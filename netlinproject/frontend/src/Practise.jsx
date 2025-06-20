import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { usecard } from './Cardcontext'

const Practise = () => {
    const [products,Setproducts] = useState([])
    const [search ,Setsearch] = useState("")
    const [order,Setorder] = useState("")
    const [searchbrand,Setsearchbrand] = useState("")
    const [searchcolor,Setsearchcolor] = useState("")
    const [page,Setpage] = useState(1)

   const {card,addtocart} = usecard()

    useEffect(()=>{
        axios.get("https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd")
        .then(res=>res.data)
        .then(data=>Setproducts(data))
        .catch(err=>console.log("server error",err))
    },[])
    // console.log(products)

    let result = [...products]
    // console.log(result)

             if(search){
          result = result.filter(item=>(
            item.productName.toLowerCase().includes(search.toLowerCase())||
            item.brandName.toLowerCase().includes(search.toLowerCase())   
          ))
          }
          //===============================================
        //  console.log(order)
        if(order=="asc") result.sort((a,b)=>a.price-b.price)
        if(order=="desc") result.sort((a,b)=>b.price-a.price)
       //=========================================================
        const allcolors = [...new Set(products.map(p=>p.color))]
        // console.log(allcolors)
         if(searchcolor){
            result = result.filter(key=>(
                key.color == searchcolor
            ))
         }

         //=====================================================
         const allbrand = [...new Set(products.map(key=>key.brandName))]
        //    console.log(allbrand)
           if(searchbrand){
              result = result.filter(key=> key.brandName == searchbrand)
           }

           //================================================================

           let changepage = 5
           const  totalpage = Math.ceil(result.length/changepage)
        //    console .log(totalpage)
        
        const lastpage = changepage*page 
        // console.log(lastpage)
        const firstpage =  lastpage-changepage
        const pagestore = result.slice(firstpage,lastpage)
        console.log(pagestore)
           
  return (
    <>

       <select onChange={(e)=>Setsearchcolor(e.target.value)}>
           <option value="">search by color</option>
           {
             allcolors.map((key)=>(
                <option value={key}>{key}</option>
             ))
           }
       </select>

       <select onChange={(e)=>Setsearchbrand(e.target.value)}>
             <option value="">search by brand</option>
             {
                allbrand.map((key)=>(
                    <option value={key}>{key}</option>
                ))
             }
       </select>

      <select onChange={(e)=>Setorder(e.target.value)} >
          <option value="">select</option>
          <option value="asc">assending</option>
          <option value="desc">disending</option>
      </select>

      <input type="text"
       placeholder='search product'
       onChange={(e)=>Setsearch(e.target.value)}
       />


         <div  style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginTop: '20px' }}>
       {pagestore.map((key)=>{
        return(

           
                  <div  style={{ border: '1px solid #ccc', padding: '10px' }}>
                       <h3>{key.productName}</h3>
                        <p>{key.brandName}</p>
                        <p>Color: {key.color}</p>
                        <p>₹{key.price}</p>
                        <button onClick={()=>addtocart(key)}>🛒 Add to Cart</button>
                  </div>
        
        )

       })}
        {
            page>1?( <button onClick={()=>Setpage(page-1)}>pre</button>):(null)
        }
        {
            page<totalpage?( <button onClick={()=>Setpage(page+1)}>next</button>):(null)
        }
        
        
           </div>


             <div style={{ marginTop: '40px' }}>
                <h2>🛒 Cart Items: {card.length}</h2>
                <ul>
                    {card.map((item, i) => (
                        <li key={i}>{item.productName} - ₹{item.price}</li>
                    ))}
                </ul>
                     </div>
    </>
  )
}

export default Practise