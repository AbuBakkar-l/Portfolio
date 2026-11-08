import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";

export default function Navbar({ darkMode, setDarkMode }) {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
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
            ABUBAKAR.DEV
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

        {/* Theme Toggle */}
        <IconButton
          onClick={() => setDarkMode(!darkMode)}
          sx={{
            color: "#0061FF",
            backgroundColor: "#EEF4FF",
            width: 38,
            height: 38,
            "&:hover": {
              backgroundColor: "#DCE9FF",
            },
          }}
        >
          {darkMode ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
