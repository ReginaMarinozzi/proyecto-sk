import { Stack, Button, Typography, CardMedia, Grid, Box } from "@mui/material";
import React from "react";
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <Stack
      alignItems='center'
      sx={{
        mt: { xs: 15, md: 15 },
        minHeight: { xs: '50vh', md: '70vh' }
      }}
    >
      <Grid container
        sx={{
          width: '80%',
          pb: { xs: 0 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Grid item
          md={7}
          xs={12}
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
              sx={{
                fontSize: {
                  md: '4rem',
                  xs: '2rem'
                },
                marginTop: { xs: '3' }
              }}
              component="h1"
              color="#212121"
              fontWeight={600}
              textTransform="uppercase"
            >
              Higiene, seguridad y medio ambiente
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  md: '1.5rem',
                  xs: '1rem'
                }
              }}
              component="h2"
              color="#212121"
              fontWeight={500}
            >
              Licenciado en Seguridad y Salud Ocupacional - MAT: L2- 10068-4
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  md: '1.5rem',
                  xs: '1rem'
                }
              }}
              component="h2"
              color="#212121"
              fontWeight={500}>
              Consultor, experto y perito en medio ambiente - MAT: 0646
            </Typography>
            <Stack
              flexDirection='row'
              alignItems='center'
              justifyContent='left'
            >
              <Typography
                sx={{
                  fontSize: {
                    md: '1rem',
                    xs: '0.8rem'
                  }
                }}
                component="h2"
                color="#212121"
                fontWeight={500}
              >
                Rosario, Santa Fe, Argentina
              </Typography>
              <Stack
                alignItems='center'
                justifyContent='center'
                sx={{ maxWidth: '4%', marginLeft: 1 }}
              >
                <Box
                  sx={{
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  component="img"
                  src='/images/imgbandera.png'
                  alt='bandera argentina'
                />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              mt={2}
              sx={{
                display: { xs: 'none', md: 'flex' }
              }}      
            >
              <Button
                sx={{
                  bgcolor: "#00796B", '&:hover': {
                    backgroundColor: '#006458'
                  }
                }}
                variant="contained"
                component={HashLink} smooth to={'/#servicios'}
              >
                Nuestros servicios
              </Button>
              <Button
                sx={{
                  bgcolor: "#F79D21", '&:hover': {
                    backgroundColor: '#C97400'
                  },
                  textTransform: 'uppercase'
                }}
                variant="contained"
                component={HashLink} smooth to={'/#contacto'}
              >
                Contactanos
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item
          md={5}
          xs={12}
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CardMedia
            component="img"
            image='/images/imgheader.png'
            alt='hombre sonriendo'
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Header;