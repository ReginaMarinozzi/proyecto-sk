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
      spacing={2}
      sx={{ bgcolor: '#B2DFDB' }}>

      <Stack>
        <Typography
          variant="h4"
          component="h5"
          align="center"
          color="#212121"
          fontWeight={600}
        >
          ¿Cómo empezamos? Simple
        </Typography>
      </Stack>

      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}>

        <Grid tem
          md={4}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center, flex', flexDirection: 'column' }} 
          >
          <LooksOneOutlinedIcon sx={{color: '#212121', fontSize:'100px'}}/>
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#212121">
            Nos contactás
          </Typography>
          <Typography
            variant="p"
            component="p"
            align="center"
            color="#212121"
            fontWeight={600}>
            Recibimos tu consulta y nos ponemos en contacto a la brevedad.
          </Typography>
        </Grid>

        <Grid tem
          md={4}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center, flex', flexDirection: 'column' }} >
          <LooksTwoOutlinedIcon sx={{color: '#212121', fontSize:'100px'}}/>
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#212121">
            Realizamos un análisis
          </Typography>
          <Typography
            variant="p"
            component="p"
            align="center"
            color="#212121"
            fontWeight={600}
          >
            Analizamos las necesidades de tu empresa y diseñamos un plan de trabajo
          </Typography>
        </Grid>

        <Grid tem
          md={4}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center, flex', flexDirection: 'column' }} >
          <Looks3OutlinedIcon sx={{color: '#212121', fontSize:'100px'}}/>
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#212121"
            fontWeight={600}>
            Comenzamos a trabajar
          </Typography>
          <Typography
            variant="p"
            component="p"
            align="center"
            color="#212121"
            fontWeight={600}>
            Comenzamos a trabajar y reportamos los resultados
          </Typography>
        </Grid>

      </Grid>

    </Stack>
  )
}

export default Plan
