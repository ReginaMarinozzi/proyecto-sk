import { Stack, Button, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Stack
      justifyContent="center"
      height="100vh"
      sx={{
        backgroundImage:
          'url("https://i.ibb.co/fDsXzHC/piotr-chrobot-M0-Wb-GFRTXq-U-unsplash.jpg")', backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        p={1}
        spacing={2}
      >
        <Typography
          variant="h2"
          component="h1"
          align="center"
          color="#212121"
          fontWeight={600}
          sx={{ textShadow: '2px 2px 2px #FFFFFF' }}
        >
          Servicios de higiene y seguridad
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          color="#212121"
          fontWeight={600}
          sx={{ textShadow: '2px 2px 2px #FFFFFF' }}>
          para PyMes, industrias.
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        m={1}
        spacing={2}
      >
        <Button
          sx={{ bgcolor: "#009688" }}
          variant="contained">
          Nuestros servicios
        </Button>
        <Button
          sx={{ bgcolor: "#009688" }}
          variant="contained">
          Solicitá tu cotización
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;