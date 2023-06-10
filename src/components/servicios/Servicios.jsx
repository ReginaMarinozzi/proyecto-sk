import { Stack, Typography } from '@mui/material';
import React from 'react';
import CardContainer from "../CardContainer";
import { Fade } from "react-awesome-reveal";

const Servicios = ({ array }) => {
  return (
    <Fade
    delay={250}
    duration={3000}
    triggerOnce={true}
  >
    <Stack
      m={2}
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
        Nuestros servicios
      </Typography>
      <CardContainer array={array} />
    </Stack>
    </Fade>
  )
}

export default Servicios