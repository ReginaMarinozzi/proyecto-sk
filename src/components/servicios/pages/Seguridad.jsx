import { Box, Stack, Typography, Grid } from '@mui/material';
import * as React from 'react';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';


const Seguridad = () => {

    return (
        <Grid container
            spacing={2}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: { xs: 8, md: 10 },
                p: { xs: 4, md: 2 },
                minHeight: { xs: '50vh', md: '70vh' }
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
                            Seguridad laboral en la construcción
                        </Typography>
                        <Stack
                            sx={{
                                ml: { xs: 0.2, md: 3 },
                                mb: { xs: 1, md: 0 }
                            }}
                        >
                            <HealthAndSafetyIcon sx={{
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
                            Contamos con el servicio de seguridad laborar en
                            la construcción porque nuestro principal
                            objetivo es la prevención y corrección de las
                            condiciones laborales, en base a Dec. 911/96.
                        </Typography>
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
                        src='https://i.ibb.co/qsvpxbx/max-larochelle-Qz-P1-Gc-DOSC8-unsplash.jpg'
                        alt='Hombre trabajando son una soldadora'
                    />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Seguridad