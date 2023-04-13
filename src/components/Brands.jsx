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
      <Typography
      variant="body2"
      component="p"
      color="#7c828d"
      fontWeight={600}>
        TODOS ELLOS CONFIARON, AHORA TE TOCA A VOS..
      </Typography>
      <Grid container
        sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Grid item md={1}
          sx={{ bgcolor: '#BDBDBD', borderRadius: '5px' }} >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/fGF0vqv/1.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
          sx={{ bgcolor: '#BDBDBD', borderRadius: '5px' }} >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/CzB5wTk/2.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
          sx={{ bgcolor: '#BDBDBD', borderRadius: '5px' }}>
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/H7QRXPF/4.png'
            alt='marca logo'
          />
        </Grid>

        <Grid item md={1}
          sx={{ bgcolor: '#BDBDBD', borderRadius: '5px' }}>
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/1fyHx8k/3.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
          sx={{ bgcolor: '#BDBDBD', borderRadius: '5px' }}>
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/Qkw8RrW/5.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
          sx={{ bgcolor: '#BDBDBD', borderRadius: '5px' }}>
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/WsFdsg7/6.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={1}
          sx={{ bgcolor: '#BDBDBD', borderRadius: '5px' }}>
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/3d7Z9Xs/7.png'
            alt='marca logo'
          />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Brands