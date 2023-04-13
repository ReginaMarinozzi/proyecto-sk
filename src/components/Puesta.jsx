import { Stack, Typography } from '@mui/material';
import React from 'react';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import ForestIcon from '@mui/icons-material/Forest';
import Grid from '@mui/material/Grid';

const Puesta = () => {
  return (
    <Stack
      py={12}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      sx={{ bgcolor: '#00796B' }}>

      <Stack>
        <Typography
          variant="h4"
          component="h4"
          align="center"
          color="#FFFFFF"
          fontWeight={600}
          mb={5}>
          Alcanzá los objetivos de tu empresa y cuidá lo que más importa
        </Typography>
      </Stack>

      <Stack
      alignItems='center'
      flexDirection='row'
      justifyContent='center'
      >
        <Stack
          alignItems='center'
          flexDirection='column'
          p={2}>
          <EngineeringIcon sx={{ color: '#FFFFFF', fontSize: '160px' }} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#FFFFFF"
            fontWeight={600}
          >
            Reducción de riesgos laborales
          </Typography>
        </Stack>
        <Stack
          alignItems='center'
          flexDirection='column'
          justifyContent='center'
          p={2} >
          <CoronavirusIcon sx={{ color: '#FFFFFF', fontSize: '160px' }} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#FFFFFF"
            fontWeight={600}
          >
            Accidentes, incendios y enfermedades
          </Typography>
        </Stack>
        <Stack
          alignItems='center'
          flexDirection='column'
          justifyContent='center'
          p={2}
        >
          <ForestIcon sx={{ color: '#FFFFFF', fontSize: '160px' }} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#FFFFFF"
            fontWeight={600}>
            Protección del medioambiente
          </Typography>
        </Stack>
      </Stack>


    </Stack>

  )
}

export default Puesta