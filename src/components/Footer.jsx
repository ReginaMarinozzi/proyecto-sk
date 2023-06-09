import { Stack, Typography, Box, Grid } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {

  return (
    <Stack
      sx={{
        px: 10,
        margin: 0,
        bgcolor: '#00796B'
      }}
    >
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
          margin: 0,
          bgcolor: '#00796B',
        }}
      >

        <Grid
          item
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            sx={{
              width: '20%',
            }}
            src="https://i.ibb.co/PGPhjYg/sklogoo.png"
            alt='logo'
          />
        </Grid>

        <Grid
          item
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography
            color="#FFFFFF"
            variant="p"
            component='p'
            textTransform='uppercase'
            fontWeight={500}
          >
            Santiago kunich
          </Typography>
          <Typography
            color="#FFFFFF"
            variant="p"
            component='p'
          >
            Licenciado en higiene, salud y seguridad ocupacional
            <br />
            MAT: L2- 10068-4
            <br />
            Consultor, experto y perito en medio ambiente
            <br />
            MAT: 0646
          </Typography>
        </Grid>

        <Grid
          item
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            color="#FFFFFF"
            variant="p"
            component='p'
          >
            Encontranos en instagram
          </Typography>
          <InstagramIcon />
        </Grid>

      </Grid >
    </Stack>
  )
}

export default Footer