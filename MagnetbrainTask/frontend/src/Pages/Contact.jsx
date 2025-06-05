import React, { useState } from 'react'
import Base_url from '../Config/Base_url';
import axios from 'axios';

const Contact = () => {
  const [mydata,Setmydata] = useState({
    name:"",email:"",message:""
  })
   const handlesubmit=(e)=>{
       let name = e.target.name;
       let value = e.target.value
       Setmydata(val=>({...val,[name]:value}))
      //  console.log(mydata)
   }

    const finalSubmit=async(e)=>{
        e.preventDefault();
        let api = `${Base_url}/contact/usercontact`
        try {
          const response = await axios.post(api,mydata)
          // console.log(response.data)
          alert(response.data.msg)
          Setmydata({name:"",email:"",message:""})
        } catch (error) {
          // console.log(error)
          alert(error.response.data.msg)
        }
    }
  return (
   <>
      <div style={{width:"500px", margin:"auto" ,border:"2px solid yellow", height:"700px"}}>
        <div className="container my-5 text-white">
      <h1 className="mb-4 text-warning">Contact Us</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-white">
            Name
          </label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" name='name' value={mydata.name} onChange={handlesubmit} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">
            Email address
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" name='email' value={mydata.email}  onChange={handlesubmit} />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label text-white">
            Message
          </label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your message here..." value={mydata.message} name='message' onChange={handlesubmit}></textarea>
        </div>

        <button type="submit" className="btn btn-warning" onClick={finalSubmit}>
          Send Message
        </button>
      </form>

      <div className="mt-5">
        <h4 className="text-warning">Our Contact Details</h4>
        <p>Email: <a href="mailto:support@yourbrand.com" className="text-warning">support@yourbrand.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-warning">+1 234 567 890</a></p>
        <p>Address: 123 YourBrand Street, City, Country</p>
      </div>
    </div>

    </div>
  
   </>
  )
}

export default Contact