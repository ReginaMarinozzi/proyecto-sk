import { Box, Stack, Typography, Grid } from '@mui/material';
import * as React from 'react';
import DesignServicesIcon from '@mui/icons-material/DesignServices';


const Gestion = () => {

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
                            Gestión y Diseño
                        </Typography>
                        <Stack
                            sx={{
                                ml: { xs: 1, md: 3 },
                                mb: { xs: 1, md: 0 }
                            }}
                        >
                            <DesignServicesIcon sx={{
                                fontSize: { xs: '2rem', md: '2.5rem' }
                            }}
                            />
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
                            Nos adaptamos a cada rubro y necesidad; con finalidad de cumplimiento de normativas vigentes de forma inmediata.
                            Por cada servicio ofrecemos visitas de campo para la evaluación, seguimiento y gestión sobre riesgos y oportunidades de mejoras laborales.
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
                    px={2}
                    py={5}
                >
                    <Box
                        component="img"
                        sx={{
                            borderRadius: '30px',
                            display: 'block',
                            overflow: 'hidden',
                            width: '100%',
                        }}
                        src='/images/imggestion.jpg'
                        alt='personas viendo juntas un mapa y una laptop abierta'
                    />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Gestion