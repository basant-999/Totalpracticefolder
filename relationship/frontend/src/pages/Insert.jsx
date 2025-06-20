import React from 'react';
import { useState } from 'react';
import Api_url from '../Baseurl';
import axios from "axios"

const Insert = () => {
    const [input,Setinput] = useState({
      name:"",
      city:"",
      email:""

    })
    const handleSubmit=(e)=>{
        let name = e.target.name 
        let value = e.target.value
        Setinput(val=>({...val,[name]:value}))
        console.log(input)
    }

    const finalSubmit=async()=>{
        let api = `${Api_url}/author/inserdata`
        try {
            const respo = await axios.post(api,input)
            console.log(respo.data)
            alert(respo.data.msg)
            Setinput({
                name:"",
                city:"",
                email:""

            })
        } catch (error) {
            console.log(error)
        } 
    }
  return (
    <>
      <div style={{ margin: "auto", width: "300px", padding: "20px" }}>
        <label>Author Name</label><br />
        <input type="text" name='name' value={input.name} onChange={handleSubmit} /> <br /><br />

        <label>Author City</label><br />
        <input type="text" name='city' value={input.city} onChange={handleSubmit} /> <br /><br />

        <label>Author Email</label><br />
        <input type="text"  name='email' value={input.email}  onChange={handleSubmit}/> <br /> <br />
        <button onClick={finalSubmit}>ADD</button>
      </div>
    </>
  );
};

export default Insert;
