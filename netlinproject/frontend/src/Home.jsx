import React, { useEffect, useState } from 'react'
import axios from "axios"
const Home = () => {
    const [product,Setproduct] = useState([])
    const [search,setSearch] = useState("")
    const [sort,setSort] = useState("")
    const [searchcolor,Setsearchcolor] = useState("")
    const [brandsearch,Setsearchbrand] = useState("")
    //   useEffect(()=>{
    //       fetch('https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd')
    //       .then(res=>res.json())
    //       .then(data=>{
    //         Setproduct(data)
    //       }).catch(err=>console.log("error"))
    //   },[])
    //===============================================================
    useEffect(()=>{
         axios.get('https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd')
         .then(res=>res.data)
         .then(data=>{
            Setproduct(data)
         })
    },[])
      console.log(product)

      let result = [...product]

      //===============search=================
      if(search){
          result = result.filter(item=>(
            item.productName.toLowerCase().includes(search.toLowerCase())||
            item.brandName.toLowerCase().includes(search.toLowerCase())   
          ))
      }

      if(sort==="asc") result.sort((a,b)=>a.price-b.price)
      if(sort==="desc") result.sort((a,b)=>b.price-a.price)

        if(searchcolor){
          result = result.filter(key=>key.color == searchcolor);
        }

        if(brandsearch){
          result=result.filter(key=>key.brandName == brandsearch)
        }
//================================pahing==========================
  const [page,Setpage] = useState(1)
   const changepage = 5;
   const totalpage = Math.ceil(result.length/changepage)
   console.log(totalpage)
   const lastindex = page*changepage 
   const firstindex = lastindex-changepage
   const pagestore = result.slice(firstindex,lastindex)
  
  const allColors = [...new Set(product.map(p => p.color))];
  const allbrand = [...new Set(product.map(p=>p.brandName))]
  return (
    <>
        <input
        type="text"
        placeholder="Search name or brand"
        onChange={(e) => setSearch(e.target.value)}
      />

         <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">asendind</option>
        <option value="desc">decending</option>
      </select>

     <select onChange={(e) => {
        Setsearchcolor(e.target.value);
        Setpage(1);
      }}>
        <option value="">Filter by Color</option>
        {allColors.map((color, i) => (
          <option key={i} value={color}>{color}</option>
        ))}
      </select>


       <select onChange={(e) => {
        Setsearchbrand(e.target.value);
        Setpage(1);
      }}>
        <option value="">Filter by brandName</option>
        {allbrand.map((brand, i) => (
          <option key={i} value={brand}>{brand}</option>
        ))}
      </select>






      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginTop: '20px' }}>
        {pagestore.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h4>{product.productName}</h4>
            <p>{product.brandName}</p>
            <p>Color: {product.color}</p>
            <p>₹{product.price}</p>
            <button >🛒 Add to Cart</button>
          </div>

        ))}
        {
          page>1 ? (<button onClick={()=>{Setpage(page-1)}}>pre</button>):(null) 
        }
         
         {
          page< totalpage ?(
             <button onClick={()=>{Setpage(page+1)}}>next</button>
          ):(null)
         }
          
      </div>


    

       
    </>
  )
}

export default Home