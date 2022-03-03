
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

function NavBar(){

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Heladerías Siddo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing">Promociones</Nav.Link>
          <Nav.Link href="#pricing">Tamaños</Nav.Link>
          <NavDropdown title="Sabores" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Frutales</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Chocolates</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cremas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Carrito</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
             
    )
}

export default NavBar