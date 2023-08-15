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
      <Typography
        py={3}
        mx={3}
        variant="body1"
        component="h6"
        align="center"
        color="#212121"
        fontWeight={500}
        id='servicios'
      >
        Los servicios que ofrecemos permiten cumplir con las disposiciones legales en vigencia, siguiendo lo estipulado por la Ley N° 19587 y sus decretos reglamentarios. Brindamos acciones preventivas para proteger el patrimonio de tu empresa.
      </Typography>
      <CardContainer array={array} />
    </Stack>
  )
}

export default Servicios