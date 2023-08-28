import { Box, Stack, Typography, Grid } from '@mui/material';
import * as React from 'react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';


const Prevencion = () => {

    return (
        <Grid container
            spacing={2}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: { xs: 8, md: 6 },
                p: { xs: 4, md: 0 },
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
                        alignItems='end'
                        justifyContent='left'
                    >
                        <Typography
                            variant="h4"
                            component="h4"
                            color="#212121"
                            fontWeight={600}
                            sx={{
                                mr: { xs: 0, md: 0 }
                            }}
                        >
                            Prevención y
                            <br />
                            Protección contra incendios
                        </Typography>
                        <Stack
                            sx={{
                                ml: { xs: 0.2, md: 3 },
                                mb: { xs: 1, md: 0 }
                            }}
                        >
                            <LocalFireDepartmentIcon sx={{
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
                            Acciones preventivas y correctivas para proteger el patrimonio de vuestra empresa.
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
                                    Control, recarga y/o reparación de extintores (matafuegos) presentes.
                                </li>
                                <li>
                                    Instalación de nueva, mantenimiento y/o mejora de Red de Incendio.
                                </li>
                                <li>
                                    Capacitar; liderar actividades de formación o seguimiento a Brigadas de Emergencias.
                                </li>
                                <li>
                                    Elaboración de "Estudio carga de fuego". Cap. 18. Anexo VII.
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
                        src='https://www.undef.edu.ar/wp-content/uploads/2019/06/matafuegos.jpg'
                        alt='extintor de fuego'
                    />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Prevencion