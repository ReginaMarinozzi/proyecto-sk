import { Stack, Button, Typography, CardMedia, Grid } from "@mui/material";
import React from "react";
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <Stack
      flexDirection='row'
      alignItems='center'
      minHeight='100vh'
      width='100%'
    >
      <Grid container
        m={5}
        p={5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Grid item
          md={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Stack
            flexDirection='column'
            justifyContent='left'
            spacing={4}
          >
            <Typography
              fontSize='4.2rem'
              component="h1"
              color="#212121"
              fontWeight={600}
            >
              Higiene y seguridad laboral. Salud ocupacional y medio ambiente
            </Typography>
            <Typography
              fontSize='1.5rem'
              component="h2"
              color="#212121"
              fontWeight={500}
            >
              Licenciado en higiene, salud y seguridad ocupacional - MAT: L2- 10068-4
            </Typography>
            <Typography
              fontSize='1.5rem'
              component="h2"
              color="#212121"
              fontWeight={500}>
              Consultor, experto y perito en medio ambiente - MAT: 0646
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              mt={2}
            >
              <Button
                sx={{
                  bgcolor: "#00796B", '&:hover': {
                    backgroundColor: '#006458'
                  }
                }}
                variant="contained"
                component={HashLink} smooth to={'/proyecto-sk/#servicios'}
              >
                Nuestros servicios
              </Button>
              <Button
                sx={{
                  bgcolor: "#F79D21", '&:hover': {
                    backgroundColor: '#C97400'
                  }
                }
                }
                variant="contained"
                component={HashLink} smooth to={'/proyecto-sk/#contacto'}
              >
                CONTACTANOS
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CardMedia
            component="img"
            image='https://i.ibb.co/FYcDvGq/Imagen-Header.png'
            alt='chica'
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Header;