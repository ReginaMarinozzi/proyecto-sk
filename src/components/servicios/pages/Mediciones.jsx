import { Box, Stack, Typography, Grid } from '@mui/material';
import * as React from 'react';
import SquareFootIcon from '@mui/icons-material/SquareFoot';


const Mediciones = () => {

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
                            Mediciones y Estudios
                        </Typography>
                        <Stack
                            sx={{
                                ml: { xs: 1, md: 3 },
                                mb: { xs: 1, md: 0 }
                            }}
                        >
                            <SquareFootIcon sx={{
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
                            Mediciones y estudios de Higiene y Seguridad Laboral y
                            Medio Ambiente. Así adoptar correcciones en los
                            puestos y/o lugares de trabajo de ser necesario.
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
                        src='https://i.ibb.co/09Q0m2t/scott-graham-5f-Nm-Wej4t-AA-unsplash.jpg'
                        alt='mano de persona sosteniendo un lapiz al lado de laptops'
                    />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Mediciones