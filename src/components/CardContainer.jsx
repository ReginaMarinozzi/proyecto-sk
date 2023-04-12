import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Item sx={{ bgcolor: '#009688' }}>
          <Typography
            variant="h6"
            component="p"
            align="center"
            color="#FFFFFF"
            fontWeight={600}>
            Planificación
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item sx={{ bgcolor: '#009688' }}> 
        <Typography
          variant="h6"
          component="p"
          align="center"
          color="#FFFFFF"
          fontWeight={600}>
          Supervisión
        </Typography>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item sx={{ bgcolor: '#009688'}}>
        <Typography
          variant="h6"
          component="p"
          align="center"
          color="#FFFFFF"
          fontWeight={600}>
          Mediciones
        </Typography>
          </Item>
      </Grid>
      <Grid item xs={3}>
        <Item sx={{ bgcolor: '#009688'}}>
        <Typography
          variant="h6"
          component="p"
          align="center"
          color="#FFFFFF"
          fontWeight={600}>
          Reportes
        </Typography>
        </Item>
      </Grid>
    </React.Fragment>
  );
}

const CardContainer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
export default CardContainer