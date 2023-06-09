import * as React from "react";
import { Stack, Button, Container, Typography, AppBar, Box } from "@mui/material";
import { HashLink } from 'react-router-hash-link'

function ResponsiveAppBar() {


  return (
    <AppBar position="fixed"
      sx={{ bgcolor: '#00796B', paddingY: 1 }}
    >
      <Container maxWidth="xl"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"      
        >
          <Box
            component="img"
            sx={{
              display: { xs: "none", md: "flex" },
              overflow: 'hidden',
              width: '8%',
            }}
            src="https://i.ibb.co/PGPhjYg/sklogoo.png"
            alt='logo'
          />
          <Box
            component="img"
            sx={{
              display: { xs: "flex", md: "none" },
              overflow: 'hidden',
              width: '10%',
            }}
            src="https://i.ibb.co/PGPhjYg/sklogoo.png"
            alt='logo'
          />
          <Button
            sx={{ bgcolor: "#F79D21", 
            '&:hover': { backgroundColor: '#C97400' } 
          }}
            variant="contained"
            component={HashLink} smooth to={'/proyecto-sk/#contacto'}
          >
            CONTACTANOS
          </Button>
        </Stack>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// // component={Link} to='#bottom