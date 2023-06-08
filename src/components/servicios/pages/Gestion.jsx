import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';


const Gestion = () => {
    
    return (
        <Stack
            alignItems='center'
            flexDirection='row'
            justifyContent='center'
            mt={5}
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
                        Gestión y diseño
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
                            src='https://i.ibb.co/6t0xQV5/thisisengineering-raeng-Sy-Rl-D4s-amw-unsplash.jpg'
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
                        Contamos con una amplia variedad de servicios
                        de asesoría en Higiene y Seguridad Laboral
                        adaptados a cada rubro y necesidad; con finalidad
                        de cumplimiento de normativas vigentes
                        de forma inmediata.
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                alignItems='center'
                justifyContent='center'
                sx={{ maxWidth: '50%' }}
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
                    src='https://i.ibb.co/6t0xQV5/thisisengineering-raeng-Sy-Rl-D4s-amw-unsplash.jpg'
                    alt='cascos logo'
                />
            </Stack>
        </Stack>
    )
}

export default Gestion