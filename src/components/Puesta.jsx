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
      spacing={1}
      px={8}
      sx={{ bgcolor: '#d9e7e5' }}>

      <Stack>
        <Typography
          variant="h4"
          component="h4"
          align="center"
          color="#212121"
          fontWeight={600}
          mb={5}>
          Alcanzá los objetivos de tu empresa y cuidá lo que más importa
        </Typography>
      </Stack>

      <Stack
      alignItems='center'
      flexDirection='row'
      justifyContent='center'
      spacing={2}>
        <Stack
          alignItems='center'
          flexDirection='column'
          justifyContent='center'>
          <EngineeringIcon sx={{ color: '#212121', fontSize: '160px' }} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#212121"
            fontWeight={600}
          >
            Reducción de riesgos laborales
          </Typography>
        </Stack>
        <Stack
          alignItems='center'
          flexDirection='column'
          justifyContent='center' >
          <CoronavirusIcon sx={{ color: '#212121', fontSize: '160px' }} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#212121"
            fontWeight={600}
          >
            Accidentes, incendios y enfermedades
          </Typography>
        </Stack>
        <Stack
          alignItems='center'
          flexDirection='column'
          justifyContent='center'
        >
          <ForestIcon sx={{ color: '#212121', fontSize: '160px' }} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#212121"
            fontWeight={600}>
            Protección del medioambiente
          </Typography>
        </Stack>
      </Stack>


    </Stack>

  )
}

export default Puesta