import { Stack, Typography, Grid, IconButton } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <Grid
      container
      pt={8}
      sx={{
        bgcolor: '#00796B',
        minHeight: '25vh',
        alignItems: 'start',
        justifyContent: 'space-around'
      }}
    >
      <Grid
        item
        md={3}
        xs={8}
        sx={{
          p: 2
        }}
      >
        <Typography
          color="#FFFFFF"
          variant="p"
          component='p'
          textTransform='uppercase'
          fontWeight={500}
        >
          Santiago Kunich
        </Typography>
        <Typography
          color="#FFFFFF"
          variant="p"
          component='p'
        >
          Licenciado en Seguridad y Salud Ocupacional
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
        md={3}
        xs={8}
        sx={{
          p: 2
        }}>
        <Typography
          color="#FFFFFF"
          variant="p"
          component='p'
          textTransform='uppercase'
          fontWeight={500}
        >
          Contacto
        </Typography>
        <Stack
          direction='row'
          spacing={2}
        >
          <EmailIcon sx={{ color: '#FFFFFF' }} />
          <Typography
            color="#FFFFFF"
            variant="p"
            component='p'
          >
            santiagokunich@gmail.com
          </Typography>
        </Stack>
        <Stack
          direction='row'
          spacing={2}
        >
          <LocalPhoneIcon sx={{ color: '#FFFFFF' }} />
          <Typography
            color="#FFFFFF"
            variant="p"
            component='p'
          >
            +5493413760134
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        md={3}
        xs={8}
        sx={{
          p: 2
        }}
      >
        <Typography
          color="#FFFFFF"
          variant="p"
          component='p'
          fontWeight={500}
          textTransform='uppercase'
        >
          Redes Sociales
        </Typography>
        <Stack
          direction='row'
          spacing={2}
          alignSelf='left'
        >
          <IconButton
            component={Link}
            target="_blank"
            rel="noopener noreferrer"
            to="https://www.instagram.com/sk.seguridadlaboral/?igshid=MmJiY2I4NDBkZg%3D%3D"
          >
            <InstagramIcon
              sx={{ color: '#FFFFFF' }}
            />
          </IconButton>
          <IconButton
            component={Link}
            to="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              sx={{ color: '#FFFFFF' }}
            />
          </IconButton>
        </Stack>
      </Grid>
    </Grid >
  )
}

export default Footer