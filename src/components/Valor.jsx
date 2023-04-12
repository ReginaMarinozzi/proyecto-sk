import { Stack, Typography } from '@mui/material';
import * as React from 'react';
import VerticalTabs from "./VerticalTabs";


const Valor = () => {
  return (
    <Stack
      p={3}
      direction="column"
      justifyContent="center"
      spacing={2}
      sx={{ bgcolor: '#FFFFFF' }}>

      <Stack
      >
        <Typography
          variant="h4"
          component="h4"
          align="center"
          color="#212121"
          fontWeight={600}
          m={3}>
          ¿Por qué deberías elegirnos?
        </Typography>
      </Stack>

      <Stack
        pl={40}>
        <VerticalTabs />
      </Stack>

    </Stack>
  )
}

export default Valor