import  { useState } from 'react'
import axios from "axios"
import API_BASE from '../Base_url'

const Insert = () => {
    const [mydata,Setmydata] = useState({
        name:"",email:"",city:""
    })
    const handlesubmit=(e)=>{
        let name = e.target.name
        let value = e.target.value
        Setmydata(val=>({...val,[name]:value}))
        console.log(mydata)
    }
    const finalSubmit=async()=>{
       let api = `${API_BASE}user/insert`
       try {
          const response = await axios.post(api,mydata)
        //   console.log(response.data)
          alert(response.data.msg)
          Setmydata({name:"",email:"",city:""})
       } catch (error) {
        // console.log(error)
        alert(error.response.data.msg)
       }
    }
  return (
   <>
     <div>
          <h1>insert your data</h1>
          <input type="text" placeholder='inter you name'name='name' value={mydata.name} onChange={handlesubmit}/> <br />
        <input type="email" placeholder='inter your email' name="email" value={mydata.email}onChange={handlesubmit} /> <br />
        <input type="text" placeholder='inter your city' name='city' value={mydata.city}onChange={handlesubmit}/> <br />
        <button onClick={finalSubmit}>submit</button>
     </div>
   </>
  )
}

export default Insert