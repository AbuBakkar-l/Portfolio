import React from "react";
import { Box, Container, Typography, Button, Stack, Chip } from "@mui/material";

import aboutImage from "../Assets/img/about-us.png";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 7, md: 12 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 5, md: 8 },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* LEFT SIDE - TEXT */}
          
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
      background: "linear-gradient(135deg, #F4F8FF 0%, #DCE9FF 100%)",
      border: "1px solid #DCE8FF",
      borderRadius: "100px",
      px: 2,
      py: 0.8,
      mb: 2.5,
    }}
  >
    <Typography
      sx={{
        color: "#0C2147",
        fontSize: "11px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        letterSpacing: "0.5px",
      }}
    >
      01 / ABOUT ME
    </Typography>
  </Box>

  {/* Main Heading */}
  <Typography
    component="h1"
    sx={{
      color: "#0C2147",
      fontSize: {
        xs: "36px",
        sm: "44px",
        md: "48px",
        lg: "52px",
      },
      fontWeight: 800,
      fontFamily: "Inter, sans-serif",
      lineHeight: 1.2,
      letterSpacing: "-1.5px",
      mb: 2,
    }}
  >
    More than just
    <br />
    <Box component="span" sx={{ color: "#0061FF" }}>
      writing code.
    </Box>
  </Typography>

  {/* Description */}
  <Typography
    sx={{
      color: "#52627A",
      fontSize: { xs: "14px", md: "15px" },
      fontWeight: 400,
      fontFamily: "Inter, sans-serif",
      lineHeight: 1.9,
      maxWidth: "480px",
      color: "#0C2147",
      mb: 2.5,
    }}
  >
    I'm a passionate Frontend Developer with 2+ years of
    experience in web development. I enjoy transforming
    ideas into beautiful, responsive, and functional web
    applications that deliver meaningful user experiences.
  </Typography>

  {/* Professional Highlights */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 0.8,
      mb: 3.5,
    }}
  >
    {[
      "BSCS Graduate",
      "2+ Years of Web Development Experience",
      "AI & Machine Learning Enthusiast",
    ].map((item) => (
      <Box
        key={item}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          py: 0.5,
        }}
      >
      <Box>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="17"
  height="17"
  viewBox="0 0 13 13"
  fill="none"
  style={{
    width: "17px",
    height: "17px",
    minWidth: "17px",
    minHeight: "17px",
    flexShrink: 0,
    display: "block",
  }}
>
  <path
    d="M4.58 6.33L5.75 7.5L8.08 5.17M12.17 6.33C12.17 9.56 9.56 12.17 6.33 12.17C3.11 12.17 0.5 9.56 0.5 6.33C0.5 3.11 3.11 0.5 6.33 0.5C9.56 0.5 12.17 3.11 12.17 6.33Z"
    stroke="#0061FF"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

      </Box>

        <Typography
          sx={{
            color: "#0C2147",
            fontSize: { xs: "13px", sm: "14px", md: "15px" },
            fontWeight: 500,
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.6,
          }}
        >
          {item}
        </Typography>
      </Box>
    ))}
  </Box>

  {/* Learn More Button */}
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 2,
    }}
  >
    <Button
      variant="outlined"
      component="a"
      href="#contact"
      endIcon={
        <Box component="span" sx={{ fontSize: "19px", lineHeight: 1 }}>
          →
        </Box>
      }
      sx={{
        color: "#0061FF",
        borderColor: "#0061FF",
        borderRadius: "100px",
        px: 3.5,
        py: 1.3,
        fontFamily: "Inter, sans-serif",
        fontSize: "13px",
        fontWeight: 600,
        textTransform: "none",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: "#004ECC",
          backgroundColor: "#EAF1FF",
          transform: "translateY(-2px)",
        },
      }}
    >
      Learn More
    </Button>
  </Box>
</Box>


          {/* RIGHT SIDE - IMAGE */}
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
              sx={{
                width: "100%",
                maxWidth: 430,
                position: "relative",
                borderRadius: 5,
                overflow: "hidden",
                boxShadow: "0 15px 45px rgba(0, 100, 255, 0.15)",
                "& img": {
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                },
              }}
            >
              <Box
                component="img"
                src={aboutImage}
                alt="Professional portrait"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
