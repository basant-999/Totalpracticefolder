
import {useNavigate} from "react-router-dom"
import React, { useState } from 'react';
import { Modal, Button ,Form } from 'react-bootstrap';
import Base_url from "../Config/Base_url";
import axios from "axios";
import { MdMyLocation } from "react-icons/md";
const SecondTop = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
       const [show, setShow] = useState(false);

       const handleClose = () => setShow(false);
       const handleShow = () => setShow(true);

       const finalsubmit=async(e)=>{
         e.preventDefault();
        try {
          let api = `${Base_url}/user/userlogin`
          const response = await axios.post(api,{email,password})
          console.log(response.data)
          localStorage.setItem("token",response.data.token)
          localStorage.setItem("UserId",response.data.user._id)
          alert(response.data.msg)
        } catch (error) {
          console.log(error)
          alert(error.response.data.msg)
        }
       }
  return (
   <>
     
         <nav className="navbar navbar-dark bg-dark px-4 py-3">
      <a className="navbar-brand text-warning fw-bold ps-4" href="#">
        <MdMyLocation /> {localStorage.getItem("userName")}
      </a>

      <div className="d-flex align-items-center">
        {/* Show these when user is NOT logged in */}
        <button className="btn btn-outline-light btn-sm me-2" onClick={handleShow} >
         User-Login
        </button>
        <button className="btn btn-warning btn-sm" onClick={()=>navigate("signup")} >
          Signup
        </button>

       
      </div>
    </nav>
     
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" onClick={finalsubmit}>
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
   </>
  )
}

export default SecondTop