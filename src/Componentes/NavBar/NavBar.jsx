
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../../Widget/CartWidget";
import Logo from "../Logo/Logo";
import { NavLink, Link } from 'react-router-dom';


function NavBar(){

    return (
      <Navbar collapseOnSelect expand="lg" style={{ 
        backgroundColor: "#f4efef"
   }} >
      <Container>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">

        
       <Link to='/'> <li className="nav-item"> <Logo /></li></Link>
        
          <NavDropdown title="Maquillaje" id="collasible-nav-dropdown"  style={{ 
                 fontSize: 18, width: 200}} >
            <NavLink to="categoria/labios"><li className="nav-item">Labios </li></NavLink>
            <NavLink to="categoria/ojos"><li className="nav-item">Ojos</li> </NavLink>
            <NavLink to="categoria/rostro"><li className="nav-item">Rostro</li></NavLink>
      
          </NavDropdown>
   
          <NavDropdown title="Dermocosmética" id="collasible-nav-dropdown" style={{ 
                 fontSize: 18, width: 200}}>
           <NavLink to="categoria/cremas"><li className="nav-item">Cremas</li></NavLink>
            <NavLink to="categoria/tratamientos"><li className="nav-item">Tratamientos</li></NavLink>
            <NavLink to="categoria/limpieza"><li className="nav-item">Limpieza</li></NavLink>
        
          </NavDropdown>
        
          <NavDropdown title="Manos" id="collasible-nav-dropdown" style={{ 
                 fontSize: 18, width: 200}}>
           <NavLink to="categoria/esmalte"><li className="nav-item">Esmalte</li></NavLink>
            <NavLink to="categoria/tratamientosesm"><li className="nav-item">Tratamientos</li></NavLink>
          
          </NavDropdown>
        </Nav>
        <Nav>
          <Link to="cart">
          <CartWidget />
          </Link>
          
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
             
    )
}

export default NavBar