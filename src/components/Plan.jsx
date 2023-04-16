import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';

const Plan = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      textAlign='center'
      m={15}
    >
      <Stack
        mb={6}
      >
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
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', maxWidth: '1200px' }}
      >
        <Grid item
          md={3}
          sx={{ bgcolor: '#F79D21', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '300px' }}
        >
          <LooksOneOutlinedIcon sx={{ color: '#212121', fontSize: '100px' }} />
          <Typography
            variant="h6"
            component="p"
            color="#212121"
            textAlign='center'
            fontWeight={600}
            mb={1}>
            Nos contactás
          </Typography>
          <Typography
            variant="p"
            component="p"
            color="#212121"
            textAlign='center'
            fontWeight={600}>
            Recibimos tu consulta y nos 
            <br />
            ponemos en contacto a la brevedad
          </Typography>
        </Grid>

        <Grid item
          md={3}
          sx={{ bgcolor: '#F79D21', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '300px'  }}
        >
          <LooksTwoOutlinedIcon sx={{ color: '#212121', fontSize: '100px' }} />
          <Typography
            variant="h6"
            component="p"
            color="#212121"
            fontWeight={600}
            textAlign='center'
            mb={1}>
            Realizamos un análisis
          </Typography>
          <Typography
            variant="p"
            component="p"
            color="#212121"
            fontWeight={600}
            textAlign='center'
          >
            Analizamos las necesidades de tu empresa y diseñamos un plan de trabajo
          </Typography>
        </Grid>

        <Grid item
          md={3}
          sx={{ bgcolor: '#F79D21', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '300px'  }} >
          <Looks3OutlinedIcon sx={{ color: '#212121', fontSize: '100px' }} />
          <Typography
            variant="h6"
            component="p"
            color="#212121"
            textAlign='center'
            fontWeight={600}
            mb={1}>
            Comenzamos a trabajar
          </Typography>
          <Typography
            variant="p"
            component="p"
            color="#212121"
            textAlign='center'
            fontWeight={600}>
            Luego del analisis comenzamos a trabajar y reportamos los resultados
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Plan
