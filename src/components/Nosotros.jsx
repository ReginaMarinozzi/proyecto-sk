import { Typography, Stack } from '@mui/material'
import React from 'react'

const Nosotros = () => {
    return (
        <Stack
            px={30}
            mb={10}
            flexDirection='column'
            alignItems='center'
            justifyContent='center'>
            <Typography
                variant="h4"
                component="h4"
                align="center"
                color="#212121"
                fontWeight={600}
                my={5}
                spacing={2}
            >
                Nosotros
            </Typography>
            <Typography
                variant="body1"
                component="p"
                align="justify"
                color="#212121"
                fontWeight={400}
            >
                Brindamos servicios de integral y calidad en el asesoramiento legal, evaluación y formación en prevención de riesgos laborales en materia de Higiene, Seguridad y Medio Ambiente. Nuestro asesoramiento se enfoca hacía industrias, comercios, instituciones privadas, públicas y obras en construcción.
                Contamos con la participación de profesionales especializados en el área de prevención y control de riesgos laborales y medio ambiente. Prestamos atención a las necesidades de nuestros clientes y ofrecemos soluciones integrales a medida.
                Disponemos de las habilitaciones correspondientes para desarrollar nuestras tareas en las Provincias de Santa Fe.
                Trabajamos con un equipo humano multidisciplinario que se capacita permanentemente para ofrecer las mejores soluciones disponibles en el mercado en materia de Seguridad y Salud Ocupacional.
            </Typography>
            <Typography
                variant="body1"
                component="p"
                align="justify"
                color="#212121"
                fontWeight={400}
            >
                Estamos convencidos de que la aplicación de una política
                de Higiene y Seguridad adecuada permite reducir los costos
                por accidentes, multas y juicios laborales, logrando un ambiente
                de trabajo saludable y maximizando la productividad de su empresa.
                Esto se puede lograr a través de:
                -	Cumplimentar los lineamientos fijados por:
                -	Ley Nacional de Higiene y Seguridad en el Trabajo N°19.587, Decretos Reglamentarios.
                -	Ley Nacional de Riesgo del Trabajo N° 24.557 y Decretos Reglamentarios.
                -	Ley Nacional 25.675 de Presupuestos mínimos para la gestión sustentable y adecuada del ambiente y respectivos.
                -	Leyes provinciales y/o normativas municipales o comunales.

            </Typography>
        </Stack>
    )
}

export default Nosotros