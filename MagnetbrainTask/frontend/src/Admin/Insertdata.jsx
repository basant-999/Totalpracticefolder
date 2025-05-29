import React, { useState } from 'react'
import Base_url from '../Config/Base_url'
import axios from "axios"

const Insertdata = () => {
  const [input,Setinput] = useState("")
  const [upload,Setupload] = useState("")

    const handlesubmit=(e)=>{
      let name= e.target.name;
      let value = e.target.value;
      Setinput(val=>({...val,[name]:value}))
      console.log(input)
    }

     const handleimage=(e)=>{
          Setupload(e.target.files)
     }

       const finalsubmit=async(e)=>{
         e.preventDefault()
         let api = `${Base_url}/admin/insertdata`

         const formdata = new FormData()
         for(let key in input){
          formdata.append(key,input[key])
          console.log(input[key])
         }

         for(let i=0;i<=upload.length;i++){
            formdata.append("upload",upload[i])
         }
         try {
            const response = await axios.post(api,formdata)
            console.log(response.data)
            alert(response.data.msg)
         } catch (error) {
            console.log(error)
         }
       }
      
  return (
   <>
           <div className="container mt-5">
      <div className="card shadow p-4 rounded">
        <h2 className="mb-4 text-center">Insert New Product</h2>
        <form >
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={input.name}
              onChange={handlesubmit}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price (₹)</label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={input.price}
              onChange={handlesubmit}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Image Upload</label>
            <input
              type="file"
              className="form-control"
              name="image" multiple
              onChange={handleimage}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Brand</label>
            <input
              type="text"
              className="form-control"
              name="brand"
              onChange={handlesubmit}
              value={input.brand}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100" onClick={finalsubmit}>Add Product</button>
        </form>
      </div>
    </div>
   </>
  )
}

export default Insertdata