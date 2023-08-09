import { Grid, Stack, Typography, Avatar } from '@mui/material';
import * as React from 'react';


const Plan = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      textAlign='center'
      minHeight='50vh'
      width='100%'
      my={5}
    >
      <Stack
        mb={6}
      >
        <Typography
          variant="h4"
          component="h5"
          align="center"
          color="#212121"
          fontWeight={600}
        >
          ¿Cómo empezamos? Simple
        </Typography>
      </Stack>
      <Grid container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          maxWidth: '1200px'
        }}
      >
        <Grid item md={3} xs={12}
          px={2}
          m={2}
          sx={{
            bgcolor: '#ffebcf',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '300px'
          }}
        >
          <Avatar
            sx={{
              bgcolor: '#FFFFFF',
              color: '#212121',
              width: '80px',
              height: '80px',
              marginBottom: 2
            }}
          >
            <Typography
              variant="h4"
              component="p"
              align="center"
              color="#212121"
              fontWeight={600}
            >
              1
            </Typography>
          </Avatar>
          <Typography
            variant="h6"
            component="p"
            color="#212121"
            fontWeight={600}
            textAlign='center'
            textTransform='uppercase'
            mb={2}>
            Relevamiento inicial
          </Typography>
          <Typography
            variant="p"
            component="p"
            color="#212121"
            fontWeight={500}
            textAlign='center'
          >
            Relevamos toda la empresa, establecemos
            las prioridades según los objetivos del cliente y
            proyectamos un plan de trabajo.
          </Typography>
        </Grid>
        <Grid item md={3} xs={12}
          px={2}
          m={2}
          sx={{
            bgcolor: '#ffebcf',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '300px'
          }}
        >
          <Avatar
            sx={{
              bgcolor: '#FFFFFF',
              color: '#212121',
              width: '80px',
              height: '80px',
              marginBottom: 2
            }}
          >
            <Typography
              variant="h4"
              component="p"
              align="center"
              color="#212121"
              fontWeight={600}
            >
              2
            </Typography>
          </Avatar>
          <Typography
            variant="h6"
            component="p"
            color="#212121"
            fontWeight={600}
            textAlign='center'
            textTransform='uppercase'
            mb={2}>
            Estudio
          </Typography>
          <Typography
            variant="p"
            component="p"
            color="#212121"
            fontWeight={500}
            textAlign='center'
          >
            Confeccionamos todos
            los documentos en corto plazo,
            sobre todo aquellos que estén en infracción.
          </Typography>
        </Grid>
        <Grid item md={3} xs={12}
          m={2}
          px={2}
          sx={{
            bgcolor: '#ffebcf',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '300px'
          }} >
          <Avatar
            sx={{
              bgcolor: '#FFFFFF',
              color: '#212121',
              width: '80px',
              height: '80px',
              marginBottom: 2
            }}
          >
            <Typography
              variant="h4"
              component="p"
              align="center"
              color="#212121"
              fontWeight={600}
            >
              3
            </Typography>
          </Avatar>
          <Typography
            variant="h6"
            component="p"
            color="#212121"
            textAlign='center'
            fontWeight={600}
            textTransform='uppercase'
            mb={1}>
            Acción
          </Typography>
          <Typography
            variant="p"
            component="p"
            color="#212121"
            textAlign='center'
            fontWeight={500}>
            En esta etapa proponemos mejoras,
            o alternativas para que usted tome
            mejores decisiones evitando costos innecesarios.
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Plan

