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
                            Prevención
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
                            Protección Contra Incendios. Control y recarga de matafuegos
                            e instalación de nueva, mantenimiento y/o mejora de Red de Incendio.
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
                        src='https://i.ibb.co/RDxvztj/piotr-chrobot-M0-Wb-GFRTXq-U-unsplash.jpg'
                        alt='extintor de fuego'
                    />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Prevencion