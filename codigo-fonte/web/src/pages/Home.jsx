import React from 'react'
import Header from '../components/Header'
import CarouselSlid from '../components/Carousel'
import Marcas from '../components/Marcas'
import CardsProduto from '../components/CardsProduto'
import Sobre from '../components/Sobre'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Header />
    <CarouselSlid />
    <Marcas />
    <CardsProduto />
    <Sobre />
    <Footer />
    </>
  )
}

export default Home