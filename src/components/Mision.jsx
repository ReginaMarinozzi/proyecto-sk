import { CardMedia, Stack, Typography } from '@mui/material';
import * as React from 'react';


const Mision = () => {
  return (
    <Stack
      alignItems='center'
      flexDirection='row'
      justifyContent='center'
      my={5}
      px={4}>
      <Stack
        p={3}
        my={5} 
        ml={10}
        justifyContent="center"
        spacing={2}
        sx={{ maxWidth: '50%', bgcolor: '#FFFFFF' }}
      >
        <Stack
          flexDirection='row'
          alignItems='center'
          justifyContent='center'
        >
          <Typography
            variant="h4"
            component="h4"
            align="center"
            color="#212121"
            fontWeight={600}
            m={3}>
            Nuestra Misión
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
            variant="h6"
            component="p"
            color="#212121"
            fontWeight={600}
            mx={20}>
            Garantizar la implementación de la política de Higiene y Seguridad laboral fijada por cada empresa; tendiente a promover sostenibles hábitos y condiciones ambientales en los lugares de trabajo.
          </Typography>
        </Stack>
      </Stack>
      <Stack
        alignItems='center'
        justifyContent='center'
        sx={{ maxWidth: '50%' }}
        p={10}
        mr={10}
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