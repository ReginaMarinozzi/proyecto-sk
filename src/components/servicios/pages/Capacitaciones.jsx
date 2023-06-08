import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';


const Capacitaciones = () => {
    
    return (
        <Stack
            alignItems='center'
            flexDirection='row'
            justifyContent='center'
            mt={20}
            mb={23}
            px={20}>
            <Stack
                p={3}
                my={5}
                ml={10}
                spacing={2}
                sx={{ maxWidth: '50%', bgcolor: '#FFFFFF' }}
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
                        Capacitaciones
                    </Typography>
                    <Stack
                        alignItems='center'
                        justifyContent='center'
                        sx={{ maxWidth: '5%' }}
                    >
                        <Box
                            sx={{
                                display: 'block',
                                maxWidth: 400,
                                overflow: 'hidden',
                                width: '100%',
                            }}
                            component="img"
                            src='https://i.ibb.co/wN1ttMf/Image-2023-04-24-at-14-22-57.jpg'
                            alt='chica'
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
                        Simulacros y entrenamientos. (Cap. 21 Art.  208 a 210 Dec. 351/79)
                        Capacitaciones presenciales a personal operativo, mandos medios y
                        gerentes en temas específicos de Higiene y Seguridad Laboral;
                        ya sean instruidos teóricamente y también entrenados en temas
                        vinculados al bienestar laboral.
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                alignItems='center'
                justifyContent='center'
                sx={{ maxWidth: '70%' }}
                p={6}
                mr={5}
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
                    alt='cascos logo'
                />
            </Stack>
        </Stack>
    )
}

export default Capacitaciones