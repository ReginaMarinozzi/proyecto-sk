import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const CardContainer = () => {
  return (
    <Box sx={{ bgcolor: '#B2DFDB' }} >
      <Grid container >
        <Grid item  md={3} >
          Servicio 1
        </Grid>
        <Grid item  md={3} >
          Servicio 2
        </Grid>
        <Grid item  md={3} >
          Servicio 3
        </Grid>
        <Grid item  md={3} >
          Servicio 4
        </Grid>
      </Grid>
      <Grid container >
        <Grid item  md={3} >
          Servicio 5
        </Grid>
        <Grid item  md={3} >
          Servicio 6
        </Grid>
        <Grid item  md={3} >
          Servicio 7
        </Grid>
        <Grid item  md={3} >
          Servicio 8
        </Grid>
      </Grid>
    </Box>
  )
}

export default CardContainer