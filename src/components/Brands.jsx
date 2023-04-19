import { Stack, Grid, Typography, Box } from '@mui/material';
import React from 'react';


const Brands = () => {
  return (
    <Stack
      m={2}
      py={5}
      alignItems='center'
      spacing={4}
    >
      <Stack
        my={2}>
        <Typography
          fontSize='1.125rem'
          component="p"
          color="#7c828d"
          fontWeight={500}
        >
          Ya son muchas las empresas que confian en nosotros
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