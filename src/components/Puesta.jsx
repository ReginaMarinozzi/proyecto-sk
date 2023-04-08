import { Stack, Typography } from '@mui/material';
import React from 'react';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import ForestIcon from '@mui/icons-material/Forest';


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
          color="#757575"
          fontWeight={600}
          m={3}>
          Alcanzá los objetivos de tu empresa y cuidá lo que más importa
        </Typography>
      </Stack>

      
          <EngineeringIcon sx={{ color: '#757575', fontSize: '100px' }} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#757575"
            fontWeight={600}>
            Reducción de riesgos laborales
          </Typography>
       
          <CoronavirusIcon sx={{ color: '#757575', fontSize: '100px' }} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#757575"
            fontWeight={600}
          >
            Accidentes, incendios y enfermedades
          </Typography>
       
          <ForestIcon sx={{ color: '#757575', fontSize: '100px' }} />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#757575"
            fontWeight={600}>
            Protección del medioambiente
          </Typography>

    </Stack>

  )
}

export default Puesta