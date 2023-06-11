import { Box, Stack, Typography, Grid } from '@mui/material';
import * as React from 'react';

const Vision = () => {
  return (
    <Grid container
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
            src="https://i.ibb.co/zSZ5L2b/thisisengineering-raeng-u-Oh-Bx-B23-Wao-unsplash.jpg"
            alt='cascos logo'
          />
        </Stack>
      </Grid>
      <Grid item
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stack
          spacing={2}
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
            </Typography>
            <Box
              sx={{
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '30px',
                color: '#212121'
              }}
            >
              Nuestros valores son:
              <ul>
                <li>
                  Profesionalismo
                </li>
                <li>
                  Ética
                </li>
                <li>
                  Honestidad
                </li>
                <li>
                  Trabajo en equipo y comunicación
                </li>
                <li>
                  Confidencialidad
                </li>
              </ul>
            </Box>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Vision