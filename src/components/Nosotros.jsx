import { Box, Stack, Typography, Grid } from '@mui/material';
import * as React from 'react';

const Nosotros = () => {
    return (
        <Grid container
            id='nosotros'
            spacing={2}
            my={3}
            pt={3}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '50vh',
            }}
        >
            <Grid item
                md={5}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Stack
                    px={3}
                    spacing={2}
                    sx={{ bgcolor: '#FFFFFF' }}
                >
                    <Stack
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='left'
                    >
                        <Typography
                            variant="h4"
                            component="h4"
                            align="center"
                            color="#212121"
                            fontWeight={600}
                            mr={1}
                        >
                            Nosotros
                        </Typography>
                    </Stack>
                    <Stack
                    >
                        <Typography
                            fontSize='1.250rem'
                            component="p"
                            color="#212121"
                            fontWeight={500}
                        >
                            Nuestro compromiso es brindar un servicio integral y de calidad, en materia de Higiene, Seguridad y Medio Ambiente.  Vinculando el conocimiento legal y práctico, para la prevención de riesgos laborales.
                            Manteniéndonos en constante formación para poder proveer las mejores soluciones a medida, para cada requerimiento planteado.
                            Nuestro trabajo se enfoca hacía industrias, comercios, instituciones privadas, públicas y obras en construcción.
                            Herramientas de trabajo y legales.
                        </Typography>
                        <Box
                            sx={{
                                fontFamily: 'Roboto',
                                fontWeight: '500',
                                fontSize: '20px',
                                lineHeight: '30px',
                                color: '#212121'
                            }} >
                            Cumplimentar los lineamientos de:
                            <ul>
                                <li>
                                    Ley Nacional de Higiene y Seguridad en el Trabajo N°19.587 y decretos reglamentarios.
                                </li>
                                <li>
                                    Ley Nacional de Riesgo del Trabajo N° 24.557.
                                </li>
                                <li>
                                    Ley Nacional 25.675 de Presupuestos mínimos, para la gestión sustentable y adecuada del ambiente y respectivos.
                                </li>
                                <li>
                                    Leyes provinciales y/o normativas municipales/comunales.
                                </li>
                            </ul>
                        </Box>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item
                md={5}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Stack
                    alignItems='center'
                    justifyContent='center'
                    px={3}
                >
                    <Box
                        component="img"
                        sx={{
                            borderRadius: '30px',
                            display: 'block',
                            overflow: 'hidden',
                            width: '100%',
                        }}
                        src='https://i.ibb.co/JQgH3cz/scott-blake-x-ghf9-Ljr-Vg-unsplash.jpg'
                        alt='trabajadores en una construcción usando protección'
                    />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Nosotros