import { Box, Stack, Typography, Grid } from '@mui/material';
import * as React from 'react';

const Mision = () => {
  return (
    <Grid container
      spacing={2}
      my={2}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',

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
                alt='tiro al blanco'
              />
            </Stack>
          </Stack>
          <Stack
          >
            <Box
              sx={{
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '1.250rem',
                lineHeight: '30px',
                color: '#212121'
              }} >
              <ul>
                <li>
                  Agregar valor profesional en el desarrollo de nuestros clientes, garantizando el cumplimiento de la Normativa Vigente.
                </li>
                <li>
                  Aportar soluciones fomentando la prevención en cuanto a la Higiene, Seguridad y Medio Ambiente.
                </li>
                <li>
                  Cuidar sus instalaciones, sostener la Salud y Bienestar del personal.
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
            src='https://i.ibb.co/M8WbQJP/IMG-20230508-WA0055.jpg'
            alt='Capacitación de una empresa, hombres reunidos simulando un accidente laboral '
          />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Mision