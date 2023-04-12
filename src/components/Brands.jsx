import { Stack, Grid, CardMedia } from '@mui/material';
import React from 'react';


const Brands = () => {
  return (
    <Stack
      m={3}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}>
      <Grid container>
        <Grid item md={2} >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/MGctwN2/dikalogo.png'
            alt='marca logo'
            sx={{ bgcolor: 'black' }}
          />
        </Grid>
        <Grid item md={2} >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/RgCKyKT/caffelogo.jpg'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={2} >
          <CardMedia
            component="img"
            height="auto"
            image='  https://i.ibb.co/Bnbhj5d/empresa-argentinalogo.png'
            alt='marca logo'
            sx={{ bgcolor: 'black' }}
          />
        </Grid>

        <Grid item md={2} >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/Xt08css/chevallier-logo.png'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={2} >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/Ptcp3HT/pelcologo.png'
            alt='marca logo'
            sx={{ bgcolor: 'black' }}
          />
        </Grid>
        <Grid item md={2} >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/FsSM8Vw/tormeclogo.jpg'
            alt='marca logo'
          />
        </Grid>
        <Grid item md={2} >
          <CardMedia
            component="img"
            height="auto"
            image='https://i.ibb.co/184H2Cc/logoveronica.png'
            alt='marca logo'
          />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Brands