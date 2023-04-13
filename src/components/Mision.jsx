import { CardMedia, Stack, Typography } from '@mui/material';
import * as React from 'react';


const Mision = () => {
  return (
    <Stack
      alignItems='center'
      flexDirection='row'
      justifyContent='center'
      mt={5}
      px={15}>
      <Stack
        p={3}
        my={5}
        ml={10}
        spacing={2}
        sx={{ maxWidth: '50%', bgcolor: '#FFFFFF' }}
      >
        <Stack
          flexDirection='row'
          alignItems='center'
          justifyContent='left'
        >
          <Typography
            variant="h4"
            component="h4"
            align="center"
            color="#212121"
            fontWeight={600}
            mr={1}
          >
            Nuestra misión
          </Typography>
          <Stack
            alignItems='center'
            justifyContent='center'
            sx={{ maxWidth: '5%' }}
          >
            <CardMedia
              component="img"
              image='https://i.ibb.co/72Fj2mN/direct-hit-microsoft.webp'
              alt='chica'
            />
          </Stack>
        </Stack>
        <Stack
        >
          <Typography
            fontSize='1.250rem'
            component="p"
            color="#212121"
            fontWeight={500}
          >
            Garantizar la implementación de la política de higiene y s'eguridad laboral fijada por cada empresa; tendiente a promover sostenibles hábitos y condiciones ambientales en los lugares de trabajo.
          </Typography>
        </Stack>
      </Stack>
      <Stack
        alignItems='center'
        justifyContent='center'
        sx={{ maxWidth: '50%' }}
        p={6}
        mr={5}
      >
        <CardMedia
          sx={{ borderRadius: '30px' }}
          component="img"
          image='https://i.ibb.co/k6SJDqt/pop-zebra-wp81-Dx-KUd1-E-unsplash.jpg'
          alt='cascos'
        />
      </Stack>

    </Stack>
  )
}

export default Mision