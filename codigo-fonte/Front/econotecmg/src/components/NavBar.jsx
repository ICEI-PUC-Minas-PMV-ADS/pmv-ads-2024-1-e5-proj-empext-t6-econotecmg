import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    
        <Navbar  bg="primary" data-bs-theme="dark" fixed="top" expand="lg"  >
      <Container fluid>
        <Navbar.Brand href="#">EconotecMg</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Sobre</Nav.Link>
            <Nav.Link href="#action2">Atendimento</Nav.Link>
            <Nav.Link href="#" >
              Produtos
            </Nav.Link>
          </Nav>
          <Button>Carrinho</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  )
}

export default NavBar