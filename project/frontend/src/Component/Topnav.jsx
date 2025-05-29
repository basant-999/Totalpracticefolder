
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Outlet} from "react-router-dom"




const Topnav = () => {
  return (
<>
   <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto" id='nav'>
            <div>
                 <Nav.Link as={Link} to={"home"}>Home</Nav.Link>
                  <Nav.Link as={Link} to={"login"}>login</Nav.Link>
                  <Nav.Link as={Link} to={"signup"}>signup</Nav.Link>
            </div>
           
           
            <div>
                  <Nav.Link aas={Link} to={"card"}>card</Nav.Link>
                  <Nav.Link as={Link} to={"adminlogin"}>AdminLogin</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>

      <Outlet/>
</>
  )
}

export default Topnav