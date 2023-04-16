import * as React from "react";
import { Stack, Button, Container, Typography, AppBar } from "@mui/material";

function ResponsiveAppBar() {
  return (
    <AppBar position="fixed" sx={{ bgcolor: '#00796B'}}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          m={1}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SANTIAGO KUNICH
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SANTIAGO KUNICH
          </Typography>
          <Button sx={{ bgcolor: "#F79D21", '&:hover': {
            backgroundColor: '#006458' }} } variant="contained">
            Solicitá tu cotización
          </Button>
        </Stack>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
