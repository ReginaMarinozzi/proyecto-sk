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
                mt: { xs: 6, md: 10 },
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
                                mr: { xs: 0, md: 1 },
                                mt: 3 
                            }}
                        >
                            Mediciones y Estudios
                        </Typography>
                        <Stack
                            sx={{
                                ml: { xs: 1, md: 3 },
                                mb: { xs: 1, md: 0 },
                                mt: 3 
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
                            Contamos con profesionales acreditados y una amplia gama de equipamientos de precisión homologados.
                            Mediciones laborales, ambientales y estudios de ergonomía en los sectores de trabajo requeridos:
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
                                    Medición y elaboración de protocolo de puesta a tierra y continuidad de las masas en instalaciones eléctricas, bajo Res. SRT. N°900/15.
                                </li>
                                <li>
                                    Medición de niveles de iluminación y elaboración de protocolo, según la legislación vigente. Res. SRT. 84/12.
                                </li>
                                <li>
                                    Medición de nivel sonoro continúo equivalente, acorde a la legislación vigente y elaboración de protocolo bajo Res. SRT. N°85/12.
                                </li>
                                <li>
                                    Evaluación y confección de estudio de Ergonomía en los puestos de trabajo bajo Res. 295/03; Res SRT 886/15.
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
                        src='/images/imgmediciones.jpg'
                        alt='mano de persona sosteniendo un lapiz  sobre una hoja con apuntes, al lado de dos laptops'
                    />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Mediciones