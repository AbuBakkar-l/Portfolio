import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#articles" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0 2px 12px rgba(12, 33, 71, 0.07)",
        color: "#0C2147",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "70px",
          px: { xs: 2, md: 5 },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Box
          component="a"
          href="#home"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            color: "#0C2147",
              fontFamily: "Inter, sans-serif",
          }}
        >
          <svg width="35" height="35" viewBox="0 0 32 32" fill="none">
            <path
              d="M12 7L3 16L12 25M20 7L29 16L20 25M18 5L14 27"
              stroke="#528AFF"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 800,
              letterSpacing: "0.3px",
              color: "#0C2147",
                fontFamily: "Inter, sans-serif",
            }}
          >
            ABUBAKKAR.DEV
          </Typography>
        </Box>

        {/* Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          {navLinks.map((link) => (
            <Box
              key={link.name}
              component="a"
              href={link.href}
              sx={{
                textDecoration: "none",
                color: "#0C2147",
                fontSize: "14px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                py: 1,
                borderBottom: "2px solid transparent",
                transition: "0.2s ease",

                "&:hover": {
                  color: "#0061FF",
                  borderBottom: "2px solid #0061FF",
                },
              }}
            >
              {link.name}
            </Box>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          sx={{
            display: { xs: "inline-flex", md: "none" },
            color: "#0061FF",
            backgroundColor: "#EEF4FF",
            width: 38,
            height: 38,
            "&:hover": { backgroundColor: "#DCE9FF" },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        PaperProps={{ sx: { width: 240, backgroundColor: "#FFFFFF" } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1.5 }}>
          <IconButton
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            sx={{ color: "#0C2147" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.name}
              component="a"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              <ListItemText
                primary={link.name}
                primaryTypographyProps={{
                  sx: {
                    color: "#0C2147",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
