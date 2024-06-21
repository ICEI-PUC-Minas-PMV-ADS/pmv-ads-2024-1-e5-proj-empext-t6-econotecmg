import React from 'react'
import Logo2 from '../assets/logo-semFundo.png'
const Footer = () => {
    return (
        <>
            <div className='footer'>

                <div>
                    <img
                        className="logo2-sem"
                        src={Logo2}
                        alt="First slide"
                    />
                </div>

                <div className='contato'>
                    <p>CONTATO</p>
                    <p>Telefone: (31) 93162-3003 <br></br>
                        Email: econotecmg@gmail.com
                    </p>
                </div>
                <div className='local'>
                    <p>LOCAL</p>
                    <p>Av. Amazonas, 2871 - Cachoeira, Betim - MG, 32602-345</p>

                </div>

            </div>
        </>
    )
}

export default Footer