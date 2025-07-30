import React, { useState } from "react";
import "../css/UpdateStore.css"; // External CSS import
import axios from "axios";
import { useEffect } from "react";
import Base_url from "../Base_url";


const UpdateStore = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    description: "",
    category: "",
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    console.log(formData)
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    images.forEach((img) => data.append("storeImages", img));

    // Send to backend (replace URL with your API)
    try {
      console.log(data);
      const res = await fetch(`${Base_url}store/finalstoreupdate`, {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      alert("Store Registered Successfully!");
    } catch (err) {
      alert("Error registering store");
    }
  };

   
   
  const loaddata=async()=>{
      let api = `${Base_url}store/updatestoredata/${localStorage.getItem("SId")}`
      try {
          const respo = await axios.get(api)
          console.log(respo.data)
          setFormData(respo.data);
      } catch (error) {
         console.log(error)
      }
  }
  const [StoreId] = useState(localStorage.getItem("SId"))
  useEffect(()=>{
      loaddata()
      console.log("runing")
  },[StoreId])

  return (
    <div className="store-form-container">
      <form className="store-form">
        <h2>Store Registration</h2>

        <input type="text" name="storeName" placeholder="Store Name" value={formData.storeName} onChange={handleChange} required />
        <input type="text" name="ownerName" placeholder="Owner Name" value={formData.ownerName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
        <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>

        <label>Store Images</label>
        <input type="file" name="storeImages" multiple onChange={handleImageChange} />

        <button onClick={handleSubmit}>Register Store</button>
      </form>
    </div>
  );
};

export default UpdateStore;
