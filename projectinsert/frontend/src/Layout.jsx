import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';
import Tophead from './component/Tophead';
import { Modal, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from "axios"
import Base_url from "./Base_url"
import {useSelector} from "react-redux"
import { TiShoppingCart } from "react-icons/ti";

const Layout = () => {

  const product = useSelector(state=>state.addtocart.cart)
  // console.log(product)
  const pro = product.lenght
  const [showSignup, setShowSignup] = useState(false); // modal state
  const [formData, setFormData] = useState({
    username: '',
    address: '',
    email: '',
    password: ''
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // console.log(formData  )
  };

  const finalSubmit =async(e) => {
    e.preventDefault();
    // console.log("Submitted Data:", formData);
    let api = `${Base_url}user/usersignup`
    try {
      const respo = await axios.post(api,formData)
      // console.log(respo.data)
       alert(respo.data.msg)
        setShowSignup(false); // close modal after submit
    } catch (error) {
      console.log(error)
    }
    
  
  };

      const [showLogin, setShowLogin] = useState(false);
      const [loginData, setLoginData] = useState({
            email: '',
            password: ''
          });

      const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
      };
      
      const finalLogin=async(e)=>{
           e.preventDefault();
          let api = `${Base_url}user/userlogin`
            try {
              const respo = await axios.post(api,loginData)
              // console.log(respo.data)
              localStorage.setItem("token",respo.data.token)
              localStorage.setItem("email",respo.data.email)
              localStorage.setItem("username",respo.data.username)

              alert(respo.data.msg)
                setShowLogin(false); // close modal after submit
            } catch (error) {
              // console.log(error)
              alert(error.response.data.msg)
            }
         
      }

       const username = localStorage.getItem("username") || "profile";

       const handlelogout=()=>{
        localStorage.clear()
       }

  return (
    <>
      <Tophead />
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><TiShoppingCart /> {pro}</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ display: 'flex', gap: '1rem' }}>
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/insert">Insert</Nav.Link>
              <Nav.Link as={Link} to="/display">Display</Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              <NavDropdown title={username} id="user-dropdown" align="end">
                <NavDropdown.Item onClick={()=>setShowLogin(true)}>Login</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setShowSignup(true)}>Signup</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={()=>{handlelogout()}}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />

      {/* Signup Modal */}
      <Modal show={showSignup} onHide={() => setShowSignup(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={finalSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Signup
            </Button>
          </Form>
        </Modal.Body>
      </Modal>



       <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Enter password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit"onClick={finalLogin} >
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Layout;
