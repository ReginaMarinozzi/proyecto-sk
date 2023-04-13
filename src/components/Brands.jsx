import { Stack, Grid, CardMedia, Typography } from '@mui/material';
import React from 'react';


const Brands = () => {
  return (
    <Stack
      m={2}
      pt={5}
      pb={8}
      alignItems='center'
      spacing={4}
    >
      <Stack
        my={5}>
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
            image=''
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/C6XxWmh/2.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/Hqvb9c2/4.png'
            alt='marca logo'
          />
        </Grid>

        <Grid item md={1}
        >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/1X9J68S/6.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <CardMedia
            component="img"
            height="auto"
            image=''
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <CardMedia
            component="img"
            height="auto"
            image=''
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
        >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/cCP8zn5/7.png'
            alt='marca logo'
          />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Brands