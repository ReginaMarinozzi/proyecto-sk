import { Stack, Grid, CardMedia, Typography } from '@mui/material';
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
          variant="body2"
          component="p"
          color="#7c828d"
          fontWeight={600}
          textTransform="uppercase"
        >
          Todos ellos confiaron, ahora te toca a vos...
        </Typography>
      </Stack>
      <Grid container
        sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Grid item md={1}
        >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/J7x0mF6/1.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/K0qrSwW/2.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/zJYV5Lg/3.png'
            alt='marca logo'
          />
        </Grid>

        <Grid item md={1}
        >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/JpgSnjk/4.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/7j2Hbwn/5.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/wBMqVcN/6.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/bKL9f7L/7.png'
            alt='marca logo'
          />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Brands