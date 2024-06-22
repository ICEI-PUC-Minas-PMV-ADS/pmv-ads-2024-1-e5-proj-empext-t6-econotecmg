import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function CategoryResgister(props) {
  return (
    
    <>
    <div className='container'>
    <Card>
      <div style={{margin:'10px'}}>
      <Card.Body>
        <div style={{fontSize:'18px',fontWeight: 'bold'}}>{props.texto}</div>
        
      </Card.Body>
      <Form.Label htmlFor="inputPassword5">Nome </Form.Label>
      <Form.Control
        type="texto"
        id=""
        aria-describedby=""
      />
      </div>
      <Button variant="primary" style={{margin:'10px'}}>Salvar</Button>{' '}
    </Card>
    </div>
    
    </>
  )
}

export default CategoryResgister