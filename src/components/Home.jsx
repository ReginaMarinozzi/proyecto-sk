import React from 'react'
import array from '../components/array.json'
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Header from "../components/Header";
import Brands from "../components/Brands";
import Puesta from "../components/Puesta";
import Mision from "../components/Mision"
import Plan from "../components/Plan";
import Servicios from "../components/Servicios";
import Formulario from "../components/Formulario";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <Header />
            <Brands />
            <Puesta />
            <Mision />
            <Plan />
            <Servicios array={array} />
            <Formulario />    
            <Footer />
        </div>
    )
}

export default Home