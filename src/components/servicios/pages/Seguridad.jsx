import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';


const Seguridad = () => {

    return (
        <Stack
            alignItems='center'
            flexDirection='row'
            justifyContent='center'
            mt={20}
            mb={10}
            px={20}
            >
            <Stack
                p={3}
                my={5}
                ml={10}
                spacing={2}
                sx={{ maxWidth: '70%', 
                bgcolor: '#FFFFFF' }}
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
                        Seguridad laboral en la construcción
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
                            src='https://i.ibb.co/qsvpxbx/max-larochelle-Qz-P1-Gc-DOSC8-unsplash.jpg'
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
                        Contamos con el servicio de seguridad en
                        la construcción porque nuestro principal
                        objetivo es la prevención y corrección de las
                        condiciones laborales.
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                alignItems='center'
                justifyContent='center'
                sx={{ maxWidth: '35%' }}
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
                    src='https://i.ibb.co/qsvpxbx/max-larochelle-Qz-P1-Gc-DOSC8-unsplash.jpg'
                    alt='cascos logo'
                />
            </Stack>
        </Stack>
    )
}

export default Seguridad