import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';
import SpaIcon from '@mui/icons-material/Spa';

const Ambiente = () => {

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
                        Servicios en medio ambiente
                    </Typography>
                    <Stack
                        alignItems='center'
                        justifyContent='center'
                    >
                        <SpaIcon />
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
                        Brindamos servicios ambientales basados
                        en las diferentes normativas, para la implementación
                        de políticas de desarrollo sustentable, con el principal
                        objetivo de lograr un equilibrio entre el crecimiento de
                        su actividad y el cuidado del medioambiente.
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
                    src='https://i.ibb.co/3RVGvfD/cdc-wz3ij-PHv-L54-unsplash.jpg'
                    alt='cascos logo'
                />
            </Stack>
        </Stack>
    )
}

export default Ambiente