import { Stack, Typography } from '@mui/material';
import React from 'react';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import ForestIcon from '@mui/icons-material/Forest';
import Grid from '@mui/material/Grid';

const Puesta = () => {
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
          component="h4"
          align="center"
          color="#212121"
          fontWeight={600}
          mb={3}>
          Alcanzá los objetivos de tu empresa y cuidá lo que más importa
        </Typography>
      </Stack>

      <Grid 
      container
      >
        <Grid
          item
          md={4}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center, flex', flexDirection: 'column' }} >
          <EngineeringIcon sx={{ color: '#212121', fontSize: '100px'}} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#212121"
            fontWeight={600}
            >
            Reducción de riesgos laborales
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center, flex', flexDirection: 'column' }}  >
          <CoronavirusIcon sx={{ color: '#212121', fontSize: '100px' }} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#212121"
            fontWeight={600}
          >
            Accidentes, incendios y enfermedades
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center, flex', flexDirection: 'column' }}
        >
          <ForestIcon sx={{ color: '#212121', fontSize: '100px' }} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#212121"
            fontWeight={600}>
            Protección del medioambiente
          </Typography>
        </Grid>
      </Grid>
    </Stack>

  )
}

export default Puesta