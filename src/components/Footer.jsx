import { Stack, Typography, Box } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {

  return (

    <Stack
      py={5}
      sx={{ bgcolor: '#00796B' }}
      justifyContent='space-around'
      direction='row'
    >
      <Stack>
        <Box
          component="img"
          sx={{
            width: '20%',
          }}
          src="https://i.ibb.co/PGPhjYg/sklogoo.png"
          alt='logo'
        />
      </Stack>
      <Stack
        alignItems='center'
        justifyContent='center'
      >
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
      </Stack>
      <Stack
      >
        <Typography
          color="#FFFFFF"
          variant="p"
          component='p'
        >
          Encontranos en instagram
        </Typography>
        <InstagramIcon />
      </Stack>
    </Stack>

  )
}

export default Footer