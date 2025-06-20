
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/tophead.css"
const Tophead = () => {
  return (
     <>
            <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/">MyStore</Navbar.Brand>

        {/* Nav Links */}
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/store-login">Store Login</Nav.Link>
          <Nav.Link as={Link} to="/store-signup">Store Signup</Nav.Link>
        </Nav>
      </Container>

      {/* Moving Text below navbar */}
      <div className="moving-text bg-warning text-dark text-center py-1 w-100">
        <span>🚀 Welcome to MyStore — Best Deals Await! 🛒</span>
      </div>
    </Navbar>
     </>
  )
}

export default Tophead