import React, { useState } from 'react';
import axios from 'axios';
import Base_url from '../Base_url';

const StoreProducts = () => {
  const [productImages, setProductImages] = useState([]);
  const [productDetails, setProductDetails] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleImageChange = (e) => {
    setProductImages(e.target.files);
    // console.log(e.target.files);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(productDetails);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    // Add text fields
    for (let key in productDetails) {
      formDataToSend.append(key, productDetails[key]);
    }

    // Add images
    for (let i = 0; i < productImages.length; i++) {
      formDataToSend.append("product", productImages[i]);
    }

    const api = `${Base_url}store/storeproduct`;

    try {
      const response = await axios.post(api, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      console.log(response.data);
      alert("Product inserted successfully");

      // Reset form
      setProductDetails({ name: '', price: '', description: '' });
      setProductImages([]);
    } catch (error) {
      console.log(error);
      alert("Failed to insert product");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-start mt-5">
      <div className="border rounded p-4 shadow" style={{ width: "100%", maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Insert Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={productDetails.name}
            placeholder="Product Name"
            onChange={handleInputChange}
            className="form-control mb-2"
            required
          />
          <input
            name="price"
            value={productDetails.price}
            placeholder="Price"
            onChange={handleInputChange}
            className="form-control mb-2"
            required
          />
          <input
            name="description"
            value={productDetails.description}
            placeholder="Description"
            onChange={handleInputChange}
            className="form-control mb-2"
            required
          />
          <input
            type='file'
            name="product"
            multiple
            onChange={handleImageChange}
            className="form-control mb-2"
          />
          <button type="submit" className="btn btn-success w-100">Insert</button>
        </form>
      </div>
    </div>
  );
};

export default StoreProducts;
