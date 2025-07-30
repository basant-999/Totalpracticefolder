import React, { useEffect } from 'react'
import axios from "axios"
import { usecard } from './Cardcontext'
import { useState } from 'react'
const Prac2 = () => {
    const [product,Setproducts] = useState([])
    const [search,Setsearch] = useState("")
    const [filter,Setfilter] = useState("")
    const [brand,Setbrand] = useState("")
    const [Color,Setcolors] = useState("")
    const [page,Setpage] = useState(1)

    const {card,addtocart} = usecard()
    useEffect(()=>{
       axios.get("https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd")
       .then(res=>res.data)
       .then(data=>Setproducts(data))
       .catch(err=>console.log("error server",err))
    },[])
    // console.log(product)

    let result = [...product]

    
             if(search){
          result = result.filter(item=>(
            item.productName.toLowerCase().includes(search.toLowerCase())||
            item.brandName.toLowerCase().includes(search.toLowerCase())   
          ))
          }

          if(filter=="asc"){
             result.sort((a,b)=>a.price-b.price)
          }
          if(filter=="desc"){
            result.sort((a,b)=>b.price-a.price)
          }
          //===================================================
          const allbrand = [...new Set(result.map(item=>item.brandName))]
          // console.log(allbrand)
        
          console.log(brand)

          if(brand){
            result= result.filter(item=>item.brandName==brand)
          }
          //===============================================================

          const allcolors = [...new Set(result.map(item=>item.color))]
          // console.log(allcolors)
          // console.log(Color)
          if(Color){
            result = result.filter(item=>item.color==Color)
          }
          //==========================================================================

          const changepage = 4
          const totalpage = Math.ceil(result.length/changepage)
          // console.log(totalpage)
          const lastpage = changepage*page 
          // console.log(lastpage)
          const firstpage = lastpage-changepage
          // console.log(firstpage)

          const pagestore = result.slice(firstpage,lastpage)
          console.log(pagestore)



   const  ans = pagestore.map((key)=>{
          return(
            <>
                  <h3>{key.productName}</h3>
                        <p>{key.brandName}</p>
                        <p>Color: {key.color}</p>
                        <p>₹{key.price}</p>
                        <button onClick={()=>addtocart(key)}>addtocart</button>
            </>
          )
    })
  return (
    <>
    Search:  <input type="text" onChange={(e)=>{Setsearch(e.target.value)}} />
    filter :<select onChange={(e)=>{Setfilter(e.target.value)}}>
             <option value="">select</option>
             <option value="asc">asc</option>
             <option value="desc">desc</option>
            </select>

    allbrand:<select onChange={(e)=>{Setbrand(e.target.value)}} >
                       { allbrand.map((key)=>{
               return(
                <>
                   <option value={key}>{key}</option>
                </>
               )
          })
        }
            </select>

    allcolors:<select onChange={(e)=>{Setcolors(e.target.value)}} >
               {allcolors.map((key)=>{
                  return(
                    <>
                        <option value={key}>{key}</option>
                    </>
                  )
               })}
              </select>
    {ans}

    
    {
      page>1 ?(
    <button onClick={()=>{Setpage(page-1)}}>pre</button>):(null)
    }

    {
      page<totalpage ?(<button onClick={()=>{Setpage(page+1)}}>next</button>):(null)
    }


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

export default Prac2