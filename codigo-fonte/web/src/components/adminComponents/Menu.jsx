import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ProductRegister from './/ProductRegister';
import ProductList from './ProductList';
import CategoryResgister from './CategoryResgister'
import CategoryList from './CategoryList'
import React from 'react'

function Menu() {
  const [visivel, setVisivel] = React.useState(1)

  function seletorDeComponente() {
    if (visivel === 1) {
        return <ProductRegister texto={" Cadastro de produtos"} />
    } else if (visivel === 2) {
        return <ProductList texto={" Listagem de produtos"} />
    } else if (visivel === 3) {
        return <CategoryResgister texto={" Cadastro de categorias"} />
    } else {
        return <CategoryList texto={" Listagem de categorias"} />
    }
}

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Gerenciador de produtos</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={() => { setVisivel(1) }} key={1}>Cadastro de produtos</Nav.Link>
                  <Nav.Link onClick={() => { setVisivel(2) }} key={2}>Listagem de produtos</Nav.Link>
                  <Nav.Link onClick={() => { setVisivel(3) }} key={3}>Cadastro de Categorias</Nav.Link>
                  <Nav.Link onClick={() => { setVisivel(4) }} key={4}>Listagem de categorias</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
      ))}
      <div className='container'>
                {seletorDeComponente()}
            </div>
    </>
  );
}

export default Menu;