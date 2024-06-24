import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardsProduto = () => {
    return (
        <>
            <div className='container' style={{background:'whitesmoke'}}>
                <h3>Produtos</h3>
                <div className='container-card'>
                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="https://a-static.mlcdn.com.br/1500x1500/aquecedor-solar-transsen-reservatorio-500-litros-4-placas/gakanacionaiseimportados/1295/5c6328f236d3aec75c44d37a9f0f06eb.jpg" />
                    <Card.Body>
                        <Card.Title>Aquecedor</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Text style={{color:'green'}}> R$ 200,00</Card.Text>                      
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="#" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Text style={{color:'green'}}> R$ </Card.Text>                      
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="#" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Text style={{color:'green'}}> R$ </Card.Text>                      
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="#" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Text style={{color:'green'}}> R$ </Card.Text>                      
                    </Card.Body>
                </Card>
                </div>
                 {/*//////////////////////////////////////////////////////////////////////////////////*/}
                <div className='container-card-2'>
                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="#" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Text style={{color:'green'}}> R$ </Card.Text>                      
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="#" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Text style={{color:'green'}}> R$ </Card.Text>                      
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="#" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Text style={{color:'green'}}> R$ </Card.Text>                      
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="#" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Text style={{color:'green'}}> R$ </Card.Text>                      
                    </Card.Body>
                </Card>
                </div>
                <div className='ver-mais'><Button href={'/produtos'}>Mais Produtos</Button></div>
            </div>
            
           
        </>
    )
}

export default CardsProduto