
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from "react-router-dom"

const ThirdNav = () => {
  return (
      <>
           <Navbar bg="dark" data-bs-theme="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-warning fw-bold">
                   category
                    </Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="home" className="text-white">Home</Nav.Link>
                    <Nav.Link as={Link} to="about" className="text-white">About</Nav.Link>
                    <Nav.Link as={Link} to="contact" className="text-white">Contact</Nav.Link>
                    </Nav>
                </Container>
           </Navbar>
      </>
  )
}

export default ThirdNav