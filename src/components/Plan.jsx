import { Stack, Typography } from '@mui/material';
import React from 'react';
import AdbIcon from '@mui/icons-material/Adb';

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
          color="#757575"
          fontWeight={600}
        >
          ¿Cómo empezamos? Simple
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}>

        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          <AdbIcon />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#757575">
            Nos contactás
          </Typography>
          <Typography
            variant="p"
            component="p"
            align="center"
            color="#757575"
            fontWeight={600}>
            Recibimos tu consulta y nos ponemos en contacto a la brevedad.
          </Typography>
        </Stack>

        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          <AdbIcon />
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#757575">
            Realizamos un análisis
          </Typography>
          <Typography
            variant="p"
            component="p"
            align="center"
            color="#757575"
            fontWeight={600}
          >
            Analizamos las necesidades de tu empresa y diseñamos un plan de trabajo
          </Typography>
        </Stack>

        <Stack
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
            Comenzamos a trabajar
          </Typography>
          <Typography
            variant="p"
            component="p"
            align="center"
            color="#757575"
            fontWeight={600}>
            Comenzamos a trabajar y reportamos los resultados
          </Typography>
        </Stack>

      </Stack>

    </Stack>
  )
}

export default Plan