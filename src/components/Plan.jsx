import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';

const Plan = () => {
  return (
    <Stack
      p={10}
      direction="column"
      justifyContent="center"
      alignItems="center"
      mx={10}
      sx={{ bgcolor: '#FFFFFF' }}>
      <Stack>
        <Typography
          variant="h4"
          component="h5"
          align="center"
          color="#212121"
          fontWeight={600}
          mb={4}
        >
          ¿Cómo empezamos? Simple
        </Typography>
      </Stack>
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        p={2}
      >
        <Grid item
          md={3}
          m={2}
          px={2}
          py={4}
          sx={{ bgcolor: '#9fecdcde', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
        >
          <LooksOneOutlinedIcon sx={{ color: '#212121', fontSize: '100px' }} />
          <Typography
            variant="h6"
            component="p"
            color="#212121">
            Nos contactás
          </Typography>
          <Typography
            variant="p"
            component="p"
            color="#212121"
            fontWeight={600}>
            Recibimos tu consulta y nos ponemos en contacto a la brevedad
          </Typography>
        </Grid>
        <Grid item
          md={3}
          m={2}
          px={2}
          py={4}
          sx={{ bgcolor: '#9fecdcde', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
          <LooksTwoOutlinedIcon sx={{ color: '#212121', fontSize: '100px' }} />
          <Typography
            variant="h6"
            component="p"
            color="#212121">
            Realizamos un análisis
          </Typography>
          <Typography
            variant="p"
            component="p"
            color="#212121"
            fontWeight={600}
          >
            Analizamos las necesidades de tu empresa y diseñamos un plan de trabajo
          </Typography>
        </Grid>
        <Grid item
          md={3}
          m={2}
          px={2}
          py={4}
          sx={{ bgcolor: '#9fecdcde', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
          <Looks3OutlinedIcon sx={{ color: '#212121', fontSize: '100px' }} />
          <Typography
            variant="h6"
            component="p"
            color="#212121"
            fontWeight={600}>
            Comenzamos a trabajar
          </Typography>
          <Typography
            variant="p"
            component="p"
            color="#212121"
            fontWeight={600}>
            Luego del analisis comenzamos a trabajar y reportamos los resultados
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Plan
