import { Stack, Grid, Typography, Box } from '@mui/material';
import React from 'react';


const Brands = () => {
  return (
    <Stack
      py={5}
      alignItems='center'
      spacing={4}
      sx={{ 
        paddingTop: { xs: '0' }
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
          Algunas de las empresas que ya confian en nosotros
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
            src='https://i.ibb.co/J7x0mF6/1.png'
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
            src='https://i.ibb.co/K0qrSwW/2.png'
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
            src='https://i.ibb.co/zJYV5Lg/3.png'
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
            src='https://i.ibb.co/JpgSnjk/4.png'
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
            src='https://i.ibb.co/7j2Hbwn/5.png'
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
            src='https://i.ibb.co/wBMqVcN/6.png'
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
            src='https://i.ibb.co/bKL9f7L/7.png'
            alt='marca logo'
          />

        </Grid>
      </Grid>
    </Stack>
  )
}

export default Brands