import { Stack, Typography } from '@mui/material';
import React from 'react';
import AdbIcon from '@mui/icons-material/Adb';

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

      <Stack
        m={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}>
        <Stack
          m={3}
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          <AdbIcon />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#757575"
            fontWeight={600}>
            Reducción de riesgos laborales
          </Typography>
        </Stack>
        <Stack
          m={3}
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          <AdbIcon />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#757575"
            fontWeight={600}
          >
            Accidentes, incendios y enfermedades
          </Typography>
        </Stack>
        <Stack
          m={3}
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          <AdbIcon />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#757575"
            fontWeight={600}>
            Protección del medioambiente
          </Typography>
        </Stack>

      </Stack>

    </Stack>
  )
}

export default Puesta