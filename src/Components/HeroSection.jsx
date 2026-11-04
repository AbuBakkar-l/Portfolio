
import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";

// Replace this path with your actual profile image
import profileImg from "../Assets/img/Hero.png";

export default function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/",
      icon: (
        <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.8 2.23 3.02 1.69.1-.72.39-1.22.7-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.51.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/",
      icon: (
        <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor">
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9h2.97v9.45ZM6.44 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.01 10.74h-2.97v-4.6c0-1.1-.02-2.51-1.53-2.51-1.54 0-1.78 1.2-1.78 2.43v4.68H9.2V9h2.85v1.29h.04c.4-.74 1.37-1.53 2.82-1.53 3.01 0 3.57 1.98 3.57 4.55v5.14Z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:your-email@example.com",
      icon: (
        <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      name: "Website",
      url: "https://your-website.com",
      icon: (
        <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      ),
    },
  ];

  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, sm: 5, md: 10 },
        py: { xs: 7, md: 5 },
        gap: 5,
        background: "#F4F8FF",
        flexDirection: { xs: "column", md: "row" },
        overflow: "hidden",
      }}
    >
      {/* LEFT SIDE */}
      <Box
        sx={{
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Welcome Badge */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            background:
              "linear-gradient(#F4F8FF 0%, #C1D8FF 50%, #F2F7FF 100%)",
            border: "1px solid #DCE8FF",
            borderRadius: "100px",
            px: 2,
            py: 1,
            mb: 2,
          }}
        >
          <Typography
            sx={{
              color: "#0C2147",
              fontSize: "11px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
            }}
          >
            👋 Welcome to my portfolio
          </Typography>
        </Box>

        {/* Main Heading */}
        <Typography
          component="h1"
          sx={{
            color: "#0C2147",
            fontSize: { xs: "38px", sm: "44px", md: "50px" },
            fontWeight: 800,
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.2,
            mb: 1,
          }}
        >
          Hi, I'm{" "}
          <Box component="span" sx={{ color: "#0061FF" }}>
            Abubakar
          </Box>
        </Typography>

        {/* Job Title */}
        <Typography
          sx={{
            color: "#0C2147",
            fontSize: { xs: "23px", md: "28px" },
            fontWeight: 800,
            fontFamily: "Inter, sans-serif",
            mb: 1,
          }}
        >
          Frontend Developer
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            color: "#0C2147",
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.8,
            maxWidth: "480px",
            mb: 3.5,
          }}
        >
          I build modern, responsive and user-friendly web applications using
          React, MUI and more.
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mb: 4,
          }}
        >
          {/* Explore Projects */}
          <Button
            variant="contained"
            href="#projects"
            endIcon={
              <span style={{ fontSize: "19px", lineHeight: 1 }}>→</span>
            }
            sx={{
              backgroundColor: "#0061FF",
              color: "#FFFFFF",
              borderRadius: "100px",
              px: 2,
              py: 1.5,
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#004ECC",
                boxShadow: "none",
              },
            }}
          >
            Explore My Projects
          </Button>

          {/* Download CV */}
          <Button
            variant="outlined"
            component="a"
            href="/Abubakar-CV.pdf"
            download
            endIcon={
              <span style={{ fontSize: "18px", lineHeight: 1 }}>↓</span>
            }
            sx={{
              color: "#0061FF",
              borderColor: "#0061FF",
              borderRadius: "100px",
              px: 3,
              py: 1.4,
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                borderColor: "#004ECC",
                backgroundColor: "#EAF1FF",
              },
            }}
          >
            Download CV
          </Button>
        </Box>

        {/* Social Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {socialLinks.map((social) => (
            <IconButton
              key={social.name}
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              sx={{
                width: 42,
                height: 42,
                backgroundColor: "#E5EDFF",
                color: "#0C2E5C",
                borderRadius: "50%",
                transition: "0.3s",
                "&:hover": {
                //   backgroundColor: "#0061FF",
                //   color: "#FFFFFF",
                  transform: "translateY(-3px)",
                },
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </Box>

      {/* RIGHT SIDE - PROFILE IMAGE */}
      <Box
        sx={{
          flex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={profileImg}
          alt="Abubakar - Frontend Developer"
          sx={{
            width: "100%",
            maxWidth: "430px",
            height: "auto",
            // objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}

