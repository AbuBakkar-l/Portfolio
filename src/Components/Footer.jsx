import React from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

// Import Footer Logo
import FooterLogo from "../Assets/img/FooterLogo.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111B2B",
        color: "#FFFFFF",
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 2fr 1fr",
            },
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* LEFT - LOGO */}
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <Box
              component="img"
              src={FooterLogo}
              alt="Footer Logo"
              sx={{
                width: "130px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* CENTER - COPYRIGHT */}
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "13px",
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            © 2025 Abu Bakkar. All rights reserved.
          </Typography>

          {/* RIGHT - SOCIAL ICONS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "flex-end",
              },
              gap: 1.5,
            }}
          >
            {/* GitHub */}
            <IconButton
              component="a"
              href="https://github.com/AbuBakkar-l"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#1B2A40",
                "&:hover": {
                  backgroundColor: "#1b2a40",
                },
              }}
            >
              <GitHubIcon />
            </IconButton>

            {/* LinkedIn */}
            <IconButton
              component="a"
              href="https://linkedin.com/in/abubakar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#1B2A40",
                "&:hover": {
                  backgroundColor: "#1b2a40",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>

            {/* X */}
            <IconButton
              component="a"
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#1B2A40",
                "&:hover": {
                  backgroundColor: "#1b2a40",
                },
              }}
            >
              <XIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
