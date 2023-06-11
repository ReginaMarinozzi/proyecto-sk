import * as React from 'react';
import { Stack, Grid } from '@mui/material';
import Item from './Item';

const CardContainer = ({ array }) => {
  return (
    <Stack
    >
      <Grid container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        {array.map((array) => {
          return <Grid item md={3} xs={12} key={array.id}
            m={2}
            sx={{
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'flex-end',
              flexDirection: 'column',
              height: '50vh',
              backgroundImage: `url(${array.img})`,
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <Item array={array} />
          </Grid>
        })}
      </Grid>
      </Stack>
  );
}

export default CardContainer