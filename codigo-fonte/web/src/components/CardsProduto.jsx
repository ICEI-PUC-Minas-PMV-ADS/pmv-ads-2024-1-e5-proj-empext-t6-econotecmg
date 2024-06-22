import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardsProduto = () => {
    return (
        <>
            <div className='container'>
                <h3>Produtos</h3>
                <div className='container-card'>
                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Adicionar</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Adicionar</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Adicionar</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Adicionar</Button>
                    </Card.Body>
                </Card>
                </div>
                 {/*//////////////////////////////////////////////////////////////////////////////////*/}
                <div className='container-card-2'>
                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Adicionar</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Adicionar</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Adicionar</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Adicionar</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className='ver-mais'><Button href={'/produtos'}>Mais Produtos</Button></div>
            </div>
            
           
        </>
    )
}

export default CardsProduto