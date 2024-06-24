import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slid1 from '../assets/Slid1.png';
import Slid2 from '../assets/Slid2.jpg';
import Slid3 from '../assets/Slid3.png';
function CarouselSlid() {
  return (
    <div className='carrossel'>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slid1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>ECONOTECMG</h5>
          <p>Os melhores produtos com os melhores preços.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slid2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>PRODUTOS</h5>
          <p>Os melhores produtos com os melhores preços.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slid3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>SERVIÇOS</h5>
          <p>
          Os melhores produtos com os melhores preços.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default CarouselSlid;