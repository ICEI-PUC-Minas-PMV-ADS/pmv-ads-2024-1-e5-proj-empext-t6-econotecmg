import React from 'react'
import Image from 'react-bootstrap/Image';

import ImgM1 from '../assets/marca1.png'
import ImgM2 from '../assets/marca2.png'
import ImgM3 from '../assets/marca3.png'
import ImgM4 from '../assets/marca4.png'
import ImgM5 from '../assets/marca5.png'
import ImgM6 from '../assets/marca6.png'
import ImgM7 from '../assets/marca7.png'
const Marcas = () => {
    return (
        <>
            <div className='marcas'>

                <div className='container-img'>
                    <Image className='img-marcas-2' src={ImgM1} thumbnail />
                    <Image className='img-marcas-2' src={ImgM2} thumbnail />
                    <Image className='img-marcas-2' src={ImgM3} thumbnail />
                    <Image className='img-marcas-2' src={ImgM4} thumbnail />
                    <Image className='img-marcas-2' src={ImgM5} thumbnail />
                    <Image className='img-marcas-2' src={ImgM6} thumbnail />
                    <Image className='img-marcas-2' src={ImgM7} thumbnail />

                </div>

            </div>
        </>
    )
}

export default Marcas