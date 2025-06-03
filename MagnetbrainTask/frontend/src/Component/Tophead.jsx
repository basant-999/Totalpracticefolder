import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"

const Tophead = () => {
    const [Show, Setshow] = useState(false)
    const [Email,SetEmail] = useState("")
    const [Password,SetPassword] = useState("")

    const navigate = useNavigate()
    const product = useSelector(state=>state.addtocart.cart)
    const prolenght = product.length

      const FinaSubmit= async()=>{
          let api = "http://localhost:8080/admin/adminlogin";
          try {
             const response = await axios.post(api,{Password:Password,Email:Email})
             console.log(response.data)
             localStorage.setItem("AdminName",response.data.adminName)
             alert(response.data.msg)
             navigate("admindashboard")
          } catch (error) {
            // console.log(error)
            alert(error.response.data.msg)
          }
      }
  return (
   <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">
        {/* Logo/Brand */}
        <a className="navbar-brand text-warning fw-bold" href="#">
              Bazaarly
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
            
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Admin Login */}
                          <li className="nav-item">
                                <button
                                className="btn btn-link nav-link text-white"
                                onClick={() => Setshow(true)}
                                >
                                <i className="fas fa-user-shield me-2"></i>Admin Login
                                </button>
                          </li>


            {/* Add to Cart */}
            <li className="nav-item ms-3">
              <a className="nav-link text-white position-relative" href="#" onClick={()=>navigate("cartinter")}>
                <i className="fas fa-shopping-cart me-2"></i>Add to Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {prolenght}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>



     <Modal show={Show}  onHide={() => Setshow(false)}  centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
               value={Email}
              onChange={(e) => SetEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(e) => SetPassword(e.target.value)}
              required
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          
          <Button variant="primary" onClick={FinaSubmit} >
            Login
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>

   </>
  )
}

export default Tophead