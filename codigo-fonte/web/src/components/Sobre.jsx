import React from 'react'
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo1 from '../assets/logo.jpeg'
const Sobre = () => {
    return (
        <>
            <div className='container'>
                <h3 >Sobre</h3>
                <div className='img-texto'>
                    <Image className='img-sobre' src={Logo1} roundedCircle />
                    <p className='text-sobre'>
                        Somos uma empresa especializada em equipamentos de energia solar e aquecedores de piscina. Desde a nossa fundação,
                        buscamos soluções criativas e eficientes para nossos clientes, sempre trabalhando com equipamentos certificados e de alta qualidade.
                        Contamos com uma equipe técnica altamente especializada para garantir o perfeito funcionamento do produto em sua instalação.
                        Aqui na Econotec, acreditamos que um planeta mais sustentável é possível e estamos comprometidos em ajudar nossos clientes a fazerem sua parte.
                    </p>

                </div>

                <div className='img-texto'>

                    <p className='text-sobre'>
                        Transforme o poder do sol em calor para impulsionar seu negócio! Com energia solar, você não apenas reduzirá os custos operacionais, mas também contribuirá para um futuro sustentável.
                    </p>
                    <Image className='img-sobre' src={Logo1} roundedCircle />
                </div>

            </div>
        </>
    )
}

export default Sobre