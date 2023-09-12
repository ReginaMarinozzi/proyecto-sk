import { Box, Stack, Typography, Grid } from '@mui/material';
import * as React from 'react';
import SpaIcon from '@mui/icons-material/Spa';

const Ambiente = () => {

    return (
        <Grid container
            spacing={2}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: { xs: 8, md: 4 },
                p: { xs: 4, md: 0 },
                minHeight: { xs: '50vh', md: '75vh' }
            }}
        >
            <Grid item md={5}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Stack
                    spacing={5}
                    sx={{ bgcolor: '#FFFFFF', padding: 2 }}
                >
                    <Stack
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='left'
                    >
                        <Typography
                            variant="h4"
                            component="h4"
                            color="#212121"
                            fontWeight={600}
                            sx={{
                                mr: { xs: 0, md: 1 }
                            }}
                        >
                            Servicios en medio ambiente
                        </Typography>
                        <Stack
                            sx={{
                                ml: { xs: 0.2, md: 3 },
                                mb: { xs: 1, md: 0 }
                            }}
                        >
                            <SpaIcon sx={{
                                fontSize: { xs: '2rem', md: '2.5rem' }
                            }} />
                        </Stack>
                    </Stack>
                    <Stack
                    >
                        <Typography
                            fontSize='1.250rem'
                            component="p"
                            color="#212121"
                            fontWeight={500}
                        >
                            Nos basamos en normativas ambientales vigentes para la implementación de políticas de desarrollo sustentables.
                            Logrando un equilibrio entre el crecimiento de su actividad y el cuidado del medioambiente.
                        </Typography>
                        <Box
                            sx={{
                                fontFamily: 'Roboto',
                                fontWeight: '500',
                                fontSize: '20px',
                                lineHeight: '30px',
                                color: '#212121'
                            }} >
                            <ul>
                                <li>
                                    Gestión de residuos peligrosos industriales y contaminación generada por la actividad laboral.
                                </li>
                                <li>
                                    Propuestas técnicas o tecnológicas tendientes a generar conductas eficientes ambientales.
                                </li>
                                <li>
                                    Ley General del Ambiente – Ley N°25.675
                                </li>
                                <li>
                                    Plan de Gestión Ambiental.
                                </li>
                            </ul>
                        </Box>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item md={5}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Stack
                    alignItems='center'
                    justifyContent='center'
                    p={2}
                >
                    <Box
                        component="img"
                        sx={{
                            borderRadius: '30px',
                            display: 'block',
                            overflow: 'hidden',
                            width: '100%',
                        }}
                        src='https://i.ibb.co/jfd85rP/ingamb.jpg'
                        alt='casco blanco sobre panel solar'
                    />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Ambiente