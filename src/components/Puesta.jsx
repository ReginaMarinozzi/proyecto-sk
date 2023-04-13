import { Stack, Typography, Grid } from '@mui/material';
import React from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import ForestIcon from '@mui/icons-material/Forest';


const Puesta = () => {
  return (
    <Stack
      py={10}
      px={20}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ bgcolor: '#00796B' }}>
      <Stack
      mb={5}>
        <Typography
          variant="h4"
          component="h4"
          align="center"
          color="#FFFFFF"
          fontWeight={600}
          >
          Alcanzá los objetivos de tu empresa
          <br />
          y cuidá lo que más importa
        </Typography>
      </Stack>
      <Grid container
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}
      >
        <Grid item
          md={3}
          py={4}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
        >
          <WarningAmberIcon sx={{ color: '#FFFFFF', fontSize: '160px' }} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#FFFFFF"
            fontWeight={600}
          >
            Reducción de
            <br />
            riesgos laborales
          </Typography>
        </Grid>
        <Grid item
          md={3}
          py={4}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
          <CoronavirusIcon sx={{ color: '#FFFFFF', fontSize: '160px' }} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#FFFFFF"
            fontWeight={600}
          >
            Accidentes, incendios
            <br />
            y enfermedades
          </Typography>
        </Grid>
        <Grid item
          md={3}
          py={4}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
          <ForestIcon sx={{ color: '#FFFFFF', fontSize: '160px' }} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#FFFFFF"
            fontWeight={600}>
            Protección del
            <br />
            medioambiente
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Puesta