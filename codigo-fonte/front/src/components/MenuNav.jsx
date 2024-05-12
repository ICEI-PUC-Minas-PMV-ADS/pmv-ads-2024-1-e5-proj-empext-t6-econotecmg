import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const MenuNav = () => {
  return (
    <div>
        <Navbar expand="lg"  bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">EconotecMG</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#action1">Sobre</Nav.Link>
            <Nav.Link href="#action2">Produtos</Nav.Link> 
            <Nav.Link href="#action2">Atendimento</Nav.Link>       
            <Nav.Link href="#action2" >
              Carrinho
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Link to="/Login" >Login</Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MenuNav