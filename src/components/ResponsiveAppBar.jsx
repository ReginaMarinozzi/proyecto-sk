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
            src="https://i.postimg.cc/d3NvqpvH/5124a84a97064affbb6d79ec39cd6d29p-T2ac-TJCKNe2-THdc-1.png"
            alt='logo'
          />
          <Box
            component="img"
            sx={{
              display: { xs: "flex", md: "none" },
              overflow: 'hidden',
              width: '10%',
            }}
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