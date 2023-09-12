import { Box, Stack, Typography, Grid } from '@mui/material';
import * as React from 'react';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const Capacitaciones = () => {

    return (
        <Grid container
            spacing={2}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: { xs: 8, md: 10 },
                p: { xs: 4, md: 2 },
                minHeight: { xs: '50vh', md: '80vh' }
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
                            Capacitaciones
                        </Typography>
                        <Stack
                            alignItems='center'
                            justifyContent='center'
                        >
                            <LocalLibraryIcon />
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
                            Ley 19.587 – Capacitaciones (Cap. 21 Art 208 a 210. Dec.351/79).
                            Sistema de capacitaciones dinámicas a personal operativo, mandos medios y gerentes en temas específicos de Higiene y Seguridad Laboral.
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
                                    Formación teórica y también entrenamientos en temas vinculados al bienestar laboral.
                                </li>
                                <li>
                                    Prevención, detección y corrección en "Actos Inseguros".
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
                        src='https://i.ibb.co/wN1ttMf/Image-2023-04-24-at-14-22-57.jpg'
                        alt='Personas siendo instruidas por otra sobre seguridad laboral por un bombero que sostiene una manguera para aapagar fuegos'
                    />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Capacitaciones