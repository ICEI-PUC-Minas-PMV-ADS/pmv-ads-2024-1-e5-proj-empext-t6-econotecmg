import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
const Header = () => {
  return (
    <>
      <Navbar expand="lg"  data-bs-theme="dark" bg="primary" className='navbar'>

<Navbar.Brand className='nav' href="#home">Econotec-MG</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="me-auto">
    <Nav.Link href="#home">Produtos</Nav.Link>
    <Nav.Link href="#link">Atendimento</Nav.Link>
    <Nav.Link href="#Sobre">Sobre</Nav.Link>
  </Nav>
  <Button variant="success" className='btnCarrinho'>Carrinho</Button>{' '}
</Navbar.Collapse>

</Navbar>
    </>
        
    
  )
}

export default Header