import * as React from "react";
import { Menu, Toolbar, MenuItem, IconButton, Button, Container, Typography, AppBar, Box, Stack } from "@mui/material";
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
    <AppBar position="fixed"
      sx={{ bgcolor: '#00796B', paddingY: 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            component={HashLink} smooth to={'/#home'}
          >
            <Box
              component="img"
              sx={{
                display: { xs: "none", md: "flex" },
                overflow: 'hidden',
                width: '8%',
              }}
              src="/images/sklogo.png"
              alt='logo'
            />
          </Stack>
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
              <MenuItem
                component={HashLink}
                smooth to={'/#servicios'}>
                <Typography
                  textAlign="center"
                >
                  Servicios
                </Typography>
              </MenuItem>
              <MenuItem
                component={HashLink}
                smooth to={'/#nosotros'}
              >
                <Typography
                  textAlign="center"
                >
                  Nosotros
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
            <Button
              component={HashLink} smooth to={'/#servicios'}
              sx={{ my: 1, px: 2, color: 'white', display: 'block' }}
            >
              Servicios
            </Button>
            <Button
              component={HashLink} smooth to={'/#nosotros'}
              sx={{ my: 1, px: 2, color: 'white', display: 'block' }}
            >
              Nosotros
            </Button>
          </Box>
          <Button
            sx={{
              bgcolor: "#F79D21",
              '&:hover': { backgroundColor: '#C97400' },
              textTransform: "uppercase",
              px: 4
            }}
            variant="contained"
            component={HashLink} smooth to={'/#contacto'}
          >
            Contactanos
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;