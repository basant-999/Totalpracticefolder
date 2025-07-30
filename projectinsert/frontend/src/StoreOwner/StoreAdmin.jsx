import React from 'react'
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { Outlet, Link, useNavigate } from 'react-router-dom';
const StoreAdmin = () => {
  const navigate=  useNavigate();
  return (
    <>
         <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-dark text-white min-vh-100 p-4">
          <h4 className="mb-4">Dashboard</h4>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="updateStore"  className="text-white">updateStore</Nav.Link>
            <Nav.Link as={Link} to="reviews" className="text-white">Reviews</Nav.Link>
            <Nav.Link as={Link} to="avgrating" className="text-white">AvgRating</Nav.Link>
            <Nav.Link as={Link} to="storeproducts" className="text-white">addProduct</Nav.Link>

          </Nav>
          <div className="mt-auto pt-5">
            <Button variant="danger" className="w-100 mt-4" onClick={()=>{localStorage.removeItem("SID"),navigate("/")}}>Logout</Button>
          </div>
        </Col>

        {/* Main Content */}
        <Col md={9} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default StoreAdmin