import * as React from "react";
import { Menu, Toolbar, MenuItem, IconButton, Button, Container, Typography, AppBar, Box } from "@mui/material";
import { HashLink } from 'react-router-hash-link'
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Servicios', 'Nosotros'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar  position="fixed"
    sx={{ bgcolor: '#00796B', paddingY: 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            sx={{
              display: { xs: "flex", md: "none" },
              overflow: 'hidden',
              width: '15%',
              mr: 2 
            }}
            src="https://i.ibb.co/PGPhjYg/sklogoo.png"
            alt='logo'
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Button
            sx={{ bgcolor: "#F79D21", 
            '&:hover': { backgroundColor: '#C97400' } 
          }}
            variant="contained"
            component={HashLink} smooth to={'/proyecto-sk/#contacto'}
          >
            CONTACTANOS
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;