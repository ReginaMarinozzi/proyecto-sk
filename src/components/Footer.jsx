import { Stack, Typography, Paper } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {

  return (

    <Stack
      sx={{ bgcolor: '#00796B' }}
      justifyContent='space-around'
      direction='row'
    >
      <Stack
        p={1}
      >
        <Typography
          color="#FFFFFF"
          variant="h6"
          component='p'
        >
          LOGO
        </Typography>
      </Stack>
      <Stack
        p={1}
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