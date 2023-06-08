import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';
import SquareFootIcon from '@mui/icons-material/SquareFoot';


const Mediciones = () => {

    return (
        <Stack
            alignItems='center'
            flexDirection='row'
            justifyContent='center'
            mt={20}
            mb={20}
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
                        Mediciones y estudios
                    </Typography>
                    <Stack
                        alignItems='center'
                        justifyContent='center'
                    >
                        <SquareFootIcon />
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
                    src='https://i.ibb.co/09Q0m2t/scott-graham-5f-Nm-Wej4t-AA-unsplash.jpg'
                    alt='cascos logo'
                />
            </Stack>
        </Stack>
    )
}

export default Mediciones