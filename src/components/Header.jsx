import { Stack, Button, Typography, CardMedia } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Stack
      flexDirection='row'
      alignItems='center'
      height='50vh'
      spacing={2}
      mt={20}
      mb={10}
      pt={2}
    >
      <Stack
        flexDirection='column'
        justifyContent='left'
        sx={{ width: '50%' }}
        spacing={4}
        m={15}
      >
        <Typography
          variant="h3"
          component="h1"
          color="#212121"
          fontWeight={600}
        >
          Higiene industrial, seguridad laboral, salud ocupacional y medio ambiente
        </Typography>
        <Typography
          variant="body1"
          component="h2"
          color="#212121"
          fontWeight={600}
        >
          Licenciado en higiene, salud y seguridad ocupacional - Mat: L2- 10068-4
        </Typography>
        <Typography
          variant="body1"
          component="h2"
          color="#212121"
          fontWeight={600}>
          Consultor, experto y perito en medio ambiente - Mat: 0646
        </Typography>
        <Stack
          direction="row"
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
      </Stack>
      <Stack
        alignItems='center'
        justifyContent='center'
        sx={{ width: '50%' }}
        p={15}
        mr={3}
      >
        <CardMedia
          component="img"
          image='https://www.adhoc.com.ar/web/image/715437-6a75228e/wbagfmj4ulvnvyy8niff.png'
          alt='chica'
        />
      </Stack>
    </Stack>
  );
};

export default Header;