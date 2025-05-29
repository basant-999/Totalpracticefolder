import React, { useEffect, useState } from 'react'
import axios from "axios"

const Insert = () => {
    const [input, Setmyinput] = useState("")

    const handlesubmit=(e)=>{
         let name = e.target.name
         let value = e.target.value

         Setmyinput(val=>({...val,[name]:value}))
         console.log(input)
    }

    const submit=async(e)=>{
         e.preventDefault()
          try {
          const { data } = await axios.get('http://localhost:3000/product');
            const Duplicat = data.some(
                    (item) =>
                    item.name === input.name &&
                    item.contact === input.contact
                );

                if(Duplicat){
                    alert("already inert this data")
                }else{
                   axios.post("http://localhost:3000/product",input)
                   alert("inser your data")
                }
          } catch (error) {
              console.error('Error:', error);
          } 
         
    }


  return (
   <>
      <div style={{width:"200px", padding:"20px"}}>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name" name="name" onChange={handlesubmit} /><br />

            <label htmlFor="email">Education</label>
            <input type="email" placeholder="Enter your Education" name="email" onChange={handlesubmit}  /><br />


            <label htmlFor="age">Age</label>
            <input type="text" placeholder="Enter your age" name="age" onChange={handlesubmit}  /><br />

            <label htmlFor="contact">Contact</label>
            <input type="text"  placeholder="Enter your contact"  name="contact" onChange={handlesubmit}  /><br />

            <label htmlFor="city">City</label>
            <input type="text" placeholder="Enter your city" name="city" onChange={handlesubmit} /><br />

            <label htmlFor="date">Date</label>
            <input type="date" placeholder="Enter your date" name="date" onChange={handlesubmit} /><br />

            <button onClick={submit}>submit</button>
        
        </form>

         </div>
           
   </>
  )
}

export default Insert