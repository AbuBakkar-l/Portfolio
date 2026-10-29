// src/components/Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DarkLightToggle from "./DarkLightToggle";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Abu Bakkar
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <Button component={Link} to="/projects" color="inherit">Projects</Button>
          <Button component={Link} to="/blog" color="inherit">Blog</Button>
          <Button component={Link} to="/contact" color="inherit">Contact</Button>
          <DarkLightToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </Box>
        <IconButton sx={{ display: { md: "none" } }} color="inherit">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
