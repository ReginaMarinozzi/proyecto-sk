import { Stack, Button, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Stack
      justifyContent="center"
      height="80vh"
      sx={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1516216628859-9bccecab13ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        m={1}
        spacing={2}
      >
        <Typography
          variant="h2"
          component="h1"
          align="center"
          color="#212121"
          fontWeight={600}>
          Servicios de higiene y seguridad
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          color="#FFFFFF"
          fontWeight={600}>
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
