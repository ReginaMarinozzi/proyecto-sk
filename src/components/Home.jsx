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
import { Fade } from "react-awesome-reveal";

const Home = () => {
    return (
        <div>
            <Header />
            < Fade
                delay={250}
                duration={3000}
                triggerOnce={true}
            >
                <Brands />
                <Puesta />
                <Mision />
                <Vision />
                <Plan />
                <Servicios array={array} />
                <Nosotros />
                <Formulario />
            </Fade>
        </div>
    )
}

export default Home