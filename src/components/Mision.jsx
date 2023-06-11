import { Box, Stack, Typography, Grid } from '@mui/material';
import * as React from 'react';

const Mision = () => {
  return (
    <Grid container
      spacing={4}
      my={2}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
        width: '100%'
      }}
    >
      <Grid item
        md={5}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stack
          spacing={5}
          sx={{ bgcolor: '#FFFFFF' }}
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
              Nuestra misión
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
                src='https://i.ibb.co/72Fj2mN/direct-hit-microsoft.webp'
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
              Agregar valor profesional en el desarrollo de nuestros clientes,
              garantizando el cumplimiento de la normativa vigente.
              Aportar soluciones fomentando la prevención en cuanto a Higiene,
              seguridad y medio ambiente. Cuidar sus instalaciones, sostener
              la salud y el bienestar del personal.
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item
        md={5}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stack
          alignItems='center'
          justifyContent='center'
        >
          <Box
            component="img"
            sx={{
              borderRadius: '30px',
              display: 'block',
              overflow: 'hidden',
              width: '100%',
            }}
            src='https://i.ibb.co/k6SJDqt/pop-zebra-wp81-Dx-KUd1-E-unsplash.jpg'
            alt='cascos logo'
          />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Mision