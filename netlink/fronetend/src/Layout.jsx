import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Layout = () => {
      const product = useSelector(state=>state.addtocart.cart)
    const prolenght = product.length
  return (
   <>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">addtocart{prolenght}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
   </>
  )
}

export default Layout