import { useState } from 'react'
import Base_url from '../Base_url'
import axios from "axios"

const Storesignup = () => {
  const [input,Setinput] = useState({
      ownerName:"",
      storeName:"",
      address:"",
       password:"",
         email:""
  })

  const handleChange=async(e)=>{
    let name = e.target.name
    let value = e.target.value
    Setinput(val=>({...val,[name]:value}))
    console.log(input)

  }

  const finalsubmit=async(e)=>{
         e.preventDefault();
         let api = `${Base_url}store/storesignup`

         try {
          const respo  = await axios.post(api,input)
          // console.log(respo.data)
          alert(respo.data.msg)
          // Setinput({
          //    ownerName:"",
          //     storeName:"",
          //     address:"",
          //     password:"",
          //     email:""
          // })
         } catch (error) {
          console.log(error)
         }
  }
  return (
    <>
       <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">Store Signup</h2>
      <form >
        <div className="mb-3">
          <label className="form-label">Owner Name</label>
          <input
            type="text"
            className="form-control"
            name="ownerName"
            value={input.ownerName}
            onChange={handleChange}
            placeholder="Enter owner's name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Store Name</label>
          <input
            type="text"
            className="form-control"
            name="storeName"
            value={input.storeName}
            onChange={handleChange}
            placeholder="Enter store name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">password</label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={input.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>

        
        <div className="mb-3">
          <label className="form-label">email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={input.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>


        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            className="form-control"
            name="address"
            value={input.address}
            onChange={handleChange}
            placeholder="Enter address"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100" onClick={finalsubmit}>Signup</button>
      </form>
    </div>
     
    </>
  )
}

export default Storesignup