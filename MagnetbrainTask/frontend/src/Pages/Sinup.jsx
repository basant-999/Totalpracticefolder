
import React, { useState } from 'react';
import Base_url from '../Config/Base_url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sinup = () => {
  const navigate = useNavigate()
    const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    password: ''
  });

  const handleChange=(e)=>{
         let name = e.target.name
         let value = e.target.value

         setFormData(val=>({...val,[name]:value}))
         console.log(formData)
  }
 const finalsubmit=async(e)=>{
     e.preventDefault()
     
      try {
         let api = `${Base_url}/user/signup`
         const response = await axios.post(api,formData) 
        //  console.log(response.data)
         alert(response.data.msg)
         setFormData({name:"",city:"",email:"",password:""})
         navigate("/")
      } catch (error) {
        // console.log(error)
        alert(error.response.data.msg)
      }
 }

  return (
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Register</h3>
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100" onClick={finalsubmit}>
                Register
              </button>
              <br /> <br />
               <button type="submit" className="btn btn- w-100" onClick={()=>navigate("/")} >
                Back to home
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Sinup