import React from 'react'
import array from '../components/array.json'
import Header from "../components/Header";
import Brands from "../components/Brands";
import Puesta from "../components/Puesta";
import Mision from "../components/Mision";
import Vision from "../components/Vision";
import Plan from "../components/Plan";
import Servicios from "../components/servicios/Servicios";
import Nosotros from './Nosotros';
import Formulario from "../components/Formulario";


const Home = () => {
    return (
        <div>
            <Header />
            <Brands />
            <Puesta />
            <Mision />
            <Vision />
            <Plan />
            <Servicios array={array} />
            <Nosotros/>
            <Formulario />
            
        </div>
    )
}

export default Home