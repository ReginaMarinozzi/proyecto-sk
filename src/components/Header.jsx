import { Stack, Button, Typography, Grid } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Stack
      flexDirection='row'
    >
      <Grid
        container
        py={10}
        m={5}
        spacing={2}
        sx={{ display: 'flex', flexDirection: 'row' }}>

        <Grid item md={6}      
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="left"
            spacing={2}
          >
            <Typography
              variant="h3"
              component="h1"
              align="left"
              color="#212121"
              fontWeight={600}
            >
              Higiene Industrial, Seguridad Laboral, Salud Ocupacional y Medio Ambiente
            </Typography>
            <Typography
              variant="body1"
              component="h2"
              align="left"
              color="#212121"
              fontWeight={600}
            >
              Licenciado en Higiene, salud y seguridad ocupacional - MAT: L2- 10068-4
            </Typography>
            <Typography
              variant="body1"
              component="h2"
              align="left"
              color="#212121"
              fontWeight={600}>
              Consultor, experto y perito en Medio Ambiente - Mat: 0646
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="left"
            spacing={2}
            mt={2}
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
        </Grid>
        <Grid item md={6}
        sx={{ bgcolor: '#B2DFDB' }}>
          <Stack
            >

          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Header;