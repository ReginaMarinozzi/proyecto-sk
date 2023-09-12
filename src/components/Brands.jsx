import { Stack, Grid, Typography, Box } from '@mui/material';
import React from 'react';


const Brands = () => {
  return (
    <Stack
      py={6}
      mt={5}
      alignItems='center'
      spacing={4}
      sx={{
        paddingTop: { xs: '0', mt: '0' }
      }}
    >
      <Stack
        my={2}>
        <Typography
          sx={{
            fontSize: {
              md: '1.125rem',
              xs: '1rem'
            }
          }}
          component="p"
          color="#7c828d"
          fontWeight={500}
          textAlign='center'
        >
          Algunas empresas que ya han confiado en nuestro trabajo
        </Typography>
      </Stack>
      <Grid container
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly'
        }}>
        <Grid item md={1}
        >
          <Box
            component="img"
            sx={{
              display: 'block',
              maxWidth: 400,
              overflow: 'hidden',
              width: '100%',
            }}
            src='/images/1.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <Box
            component="img"
            sx={{
              display: 'block',
              maxWidth: 400,
              overflow: 'hidden',
              width: '100%',
            }}
            src='/images/2.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <Box
            component="img"
            sx={{
              display: 'block',
              maxWidth: 400,
              overflow: 'hidden',
              width: '100%',
            }}
            src='/images/3.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <Box
            component="img"
            sx={{
              display: 'block',
              maxWidth: 400,
              overflow: 'hidden',
              width: '100%',
            }}
            src='/images/4.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <Box
            component="img"
            sx={{
              display: 'block',
              maxWidth: 400,
              overflow: 'hidden',
              width: '100%',
            }}
            src='/images/5.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <Box
            component="img"
            sx={{
              display: 'block',
              maxWidth: 400,
              overflow: 'hidden',
              width: '100%',
            }}
            src='/images/6.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <Box
            component="img"
            sx={{
              display: 'block',
              maxWidth: 400,
              overflow: 'hidden',
              width: '100%',
            }}
            src='/images/7.png'
            alt='marca logo'
          />

        </Grid>
      </Grid>
    </Stack>
  )
}

export default Brands