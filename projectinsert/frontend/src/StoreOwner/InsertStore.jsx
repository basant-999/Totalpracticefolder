import React, { useState } from 'react';
import axios from 'axios';
import Base_url from "../Base_url"
const InsertStore = () => {
  const [image,Setimage] = useState("")
  const [store, setStore] = useState({
    storename: '',
    location: '',
    variety: '',
  });


const handleChange=(e)=>{
  let name = e.target.name;
  let value = e.target.value
  setStore(item=>({...item,[name]:value}))
  console.log(store)
}

const handleimage=(e)=>{
     Setimage(e.target.files)
     console.log(image)
}

const finalsubmit=async(e)=>{
        e.preventDefault();
     const formdata = new FormData()
      for(let key in store){
        formdata.append(key,store[key])
        console.log(store[key])
      }

      for(let i=0; i<image.length;i++){
        formdata.append("store",image[i])
      }

    let api = `${Base_url}store/insertstore`
    try {
      const respo = await axios.post(api,formdata,{
              headers: {
                "Content-Type": "multipart/form-data"
              }
      })
      // console.log(respo.data)
      alert(respo.data.msg)

      
    } catch (error) {
      console.log(error)
    }
}


  

   
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white text-center">
              <h4>Insert New Store</h4>
            </div>
            <div className="card-body">
              <form  >
                
                <div className="mb-3">
                  <label className="form-label">Store Name</label>
                  <input
                    type="text"
                    name="storename"
                    value={store.storename}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter store name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={store.location}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter location"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Variety</label>
                  <input
                    type="text"
                    name="variety"
                    value={store.variety}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter variety"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Image</label>
                  <input
                    type="file" multiple
                    name="store"
                    onChange={handleimage}
                    className="form-control"
                    accept="image/*"
                    required
                  />
                </div>

                <button onClick={finalsubmit} className="btn btn-success w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsertStore;
