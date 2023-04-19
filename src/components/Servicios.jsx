import { Stack, Typography } from '@mui/material';
import React from 'react';
import CardContainer from "./CardContainer";

const Servicios = ({ array }) => {
  return (
    <Stack
      m={2}>
      <Typography
        py={3}
        variant="h4"
        component="h4"
        align="center"
        color="#212121"
        fontWeight={600}
        id='servicios'
        >
        Nuestros servicios
      </Typography>
      <CardContainer array={array} />
    </Stack>
  )
}

export default Servicios