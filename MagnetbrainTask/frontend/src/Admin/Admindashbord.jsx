import React from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Admindashbord = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/"); 
  };

  return (
    <>
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={2} className="bg-dark text-white p-3 vh-100 d-flex flex-column justify-content-between">
            <div>
              <h4 className="text-white mb-4">Welcome {localStorage.getItem("AdminName")}</h4>
              <Nav className="flex-column">
                <Nav.Link as={Link} to="orders" className="text-white">Orders</Nav.Link>
                <Nav.Link as={Link} to="insert" className="text-white">Insert Data</Nav.Link>
                <Nav.Link as={Link} to="manage" className="text-white">Manage</Nav.Link>
              </Nav>
            </div>

            {/* Logout Button */}
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
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

export default Admindashbord;
