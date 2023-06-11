import { Stack, Typography } from '@mui/material';
import React from 'react';
import CardContainer from "../CardContainer";

const Servicios = ({ array }) => {
  return (
    <Stack
    width='100%'
      >
      <Typography
        py={3}
        variant="h4"
        component="h4"
        align="center"
        color="#212121"
        fontWeight={600}
        id='servicios'
      >
        Nuestros Servicios
      </Typography>
      <CardContainer array={array} />
    </Stack>
  )
}

export default Servicios