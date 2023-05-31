import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';


const Vision = () => {
  return (
    <Stack
      alignItems='center'
      flexDirection='row'
      justifyContent='center'
      mt={5}
      px={20}>
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
          src="https://i.ibb.co/zSZ5L2b/thisisengineering-raeng-u-Oh-Bx-B23-Wao-unsplash.jpg"
          alt='cascos logo'
        />
      </Stack>
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
            Nuestra visión y valores
          </Typography>
        </Stack>
        <Stack
        >
          <Typography
            fontSize='1.250rem'
            component="p"
            color="#212121"
            fontWeight={500}
          >
            Ser una referencia en cuanto a servicios de higiene,
            seguridad y medio ambiente en nuestra zona de influencia,
            manteniendo nuestros valores y acompañando el crecimiento de cada organización.
            Nuestros valores son el profesionalismo - ética - honestidad - trabajo en equipo y comunicación - confidencialidad.
          </Typography>
        </Stack>

      </Stack>

    </Stack>
  )
}

export default Vision