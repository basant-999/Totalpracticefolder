
import React, { useState } from 'react';
import Base_url from '../Base_url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Storelogin = () => {
    const navigate = useNavigate()
        const [loginData, setLoginData] = useState({
            email: '',
            password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const finalsubmit = async(e) => {
    e.preventDefault();
    let api = `${Base_url}store/storelogin`
    try {
        const repo = await axios.post(api,loginData)
        // console.log(repo.data)
        localStorage.setItem("SId",repo.data.data)
        alert(repo.data.msg)
        navigate("/storedashboard")
    } catch (error) {
        alert(error.response.data.msg)
    }
   
  };
  return (
   <>
      <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Login</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" onClick={finalsubmit}className="btn btn-primary w-100">Login</button>
      </form>
    </div>
   </>
  )
}

export default Storelogin