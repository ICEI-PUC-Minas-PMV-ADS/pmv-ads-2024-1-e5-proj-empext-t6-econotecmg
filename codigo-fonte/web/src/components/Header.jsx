import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Logo1 from '../assets/logo.jpeg'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <Navbar expand="lg" data-bs-theme="dark" bg="primary" className='navbar'>
        <Image className='logo-header' src={Logo1} roundedCircle />
        <Navbar.Brand className='nav' href="#home">Econotec-MG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href={'/'}>Pagina principal</Nav.Link>
            <Nav.Link href={'/produtos'} >Produtos</Nav.Link>
            <Nav.Link href="#link">Atendimento</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </>


  )
}

export default Header