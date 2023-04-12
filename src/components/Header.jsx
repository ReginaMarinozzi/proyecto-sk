import { Stack, Button, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Stack
      justifyContent="center"
      height="100vh"
      sx={{
        backgroundImage:
          'url("https://i.ibb.co/r3gHGwp/ffff.jpg")', backgroundPosition: "center",
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
        m={2}
      >
        <Typography
          variant="h3"
          component="h1"
          align="center"
          color="#212121"
          fontWeight={600}
          sx={{
            textShadow: '2px 2px 2px #FFFFFF'
          }}
        >
          Higiene Industrial, Seguridad Laboral, Salud Ocupacional y Medio Ambiente
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          align="center"
          color="#212121"
          fontWeight={600}
        >
          Licenciado en Higiene, salud y seguridad ocupacional - MAT: L2- 10068-4
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          align="center"
          color="#212121"
          fontWeight={600}>
          Consultor, experto y perito en Medio Ambiente - Mat: 0646
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
          sx={{
            bgcolor: "#009688", '&:hover': {
              backgroundColor: '#006458'
            }
          }}
          variant="contained">
          Nuestros servicios
        </Button>
        <Button
          sx={{
            bgcolor: "#009688", '&:hover': {
              backgroundColor: '#006458'
            }
          }
          }
          variant="contained">
          Solicitá tu cotización
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;