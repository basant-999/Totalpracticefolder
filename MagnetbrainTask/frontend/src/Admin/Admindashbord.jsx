import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Admindashbord = () => {
  return (
    <>

      <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={2} className="bg-dark text-white p-3 vh-100">
          <h4 className="text-white mb-4">Dashboard</h4>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="orders" className="text-white">Orders</Nav.Link>
            <Nav.Link as={Link} to="insert" className="text-white">Insert Data</Nav.Link>
            <Nav.Link as={Link} to="manage" className="text-white">Manage</Nav.Link>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </Container>

      
    </>
  )
}

export default Admindashbord