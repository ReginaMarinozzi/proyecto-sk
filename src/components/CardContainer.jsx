import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import Item from './Item';


const CardContainer = ({ array }) => {
  return (
    <Stack
      px={20}
    >
      <Grid container
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {array.map((array) => {
          return <Grid item md={3} key={array.id}
            px={2}
            m={2}
            sx={{
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              height: '45vh',
              backgroundImage: `url(${array.img})`,
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <Item array={array}/>
          </Grid>
        })}

      </Grid>

    </Stack>
  );
}

export default CardContainer