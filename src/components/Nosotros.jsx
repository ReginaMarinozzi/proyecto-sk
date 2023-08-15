import { Box, Stack, Typography, Grid } from '@mui/material';
import * as React from 'react';

const Nosotros = () => {
    return (
        <Stack>
            <Stack
            mt={5}
                flexDirection='row'
                alignItems='center'
                justifyContent='center'
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
            <Grid container
                id='nosotros'
                spacing={2}
                my={3}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '50vh',
                }}
            >
                <Grid item
                    md={4}
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
                        >
                            <Typography
                                fontSize='1.250rem'
                                component="p"
                                color="#212121"
                                fontWeight={500}
                            >
                                Buscamos proveer óptimas soluciones por cada requerimiento planteado.
                                Vinculamos el conocimiento legal y práctico, con el fin de lograr la prevención de accidentes laborales y enfermedades profesionales.
                                Garantizando medidas preventivas, correctivas o de control a favor de tu empresa.
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item
                    md={4}
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
                <Grid item
                    md={4}
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
                        <Box
                            sx={{
                                fontFamily: 'Roboto',
                                fontWeight: '500',
                                fontSize: '1rem',
                                lineHeight: '30px',
                                color: '#212121'
                            }} >
                            Lineamientos fijados por:
                            <ul>
                                <li>
                                    Ley Nacional de Higiene y Seguridad en el Trabajo N°19.587 y decretos reglamentarios.
                                </li>
                                <li>
                                    Ley Nacional de Riesgo del Trabajo N° 24.557 y decretos reglamentarios.
                                </li>
                                <li>
                                    Ley Nacional 25.675 de Presupuestos mínimos para la gestión sustentable y adecuada del ambiente y respectivos.
                                </li>
                                <li>
                                    Leyes provinciales y normativas municipales o comunales.
                                </li>
                            </ul>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Nosotros