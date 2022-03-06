
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../../Widget/CartWidget";
import Logo from "../Logo/Logo";


function NavBar(){

    return (
      <Navbar collapseOnSelect expand="lg" style={{ 
        backgroundColor: "#f4efef"
   }} >
      <Container>
      <Navbar.Brand href="#home" ><Logo /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        
          <NavDropdown title="Maquillaje" id="collasible-nav-dropdown"  style={{ 
                 fontSize: 18, width: 200}} >
            <NavDropdown.Item href="#action/3.1" >Labios</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Ojos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Rostro</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
          </NavDropdown>
   
          <NavDropdown title="Dermocosmética" id="collasible-nav-dropdown" style={{ 
                 fontSize: 18, width: 200}}>
            <NavDropdown.Item href="#action/3.1">Cremas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Tratamientos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Limpieza</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
          </NavDropdown>
        
          <NavDropdown title="Manos" id="collasible-nav-dropdown" style={{ 
                 fontSize: 18, width: 200}}>
            <NavDropdown.Item href="#action/3.1">Esmalte</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Tratamientos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets" >
          <CartWidget />
          </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
             
    )
}

export default NavBar