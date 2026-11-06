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
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              GET TO KNOW ME
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mt: 1,
                mb: 3,
                fontSize: { xs: "2rem", md: "2.8rem" },
              }}
            >
              About{" "}
              <Box component="span" color="primary.main">
                Me
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                lineHeight: 1.6,
              }}
            >
              Hi, I'm a Web Developer passionate about building modern digital
              experiences.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.9, mb: 2 }}
            >
              I am a Computer Science graduate with over 2 years of experience
              in web development. I enjoy creating responsive, user-friendly
              websites and turning ideas into functional digital products.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.9, mb: 3 }}
            >
              Alongside web development, I am exploring Artificial Intelligence
              and Machine Learning to expand my technical skills and build
              smarter applications.
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
              sx={{ mb: 4 }}
            >
              <Chip label="React.js" color="primary" variant="outlined" />
              <Chip label="Material UI" color="primary" variant="outlined" />
              <Chip label="JavaScript" color="primary" variant="outlined" />
              <Chip label="Python" color="primary" variant="outlined" />
              <Chip label="AI & ML" color="primary" variant="outlined" />
            </Stack>

            <Button
              variant="contained"
              size="large"
              href="#contact"
              sx={{
                px: 4,
                py: 1.4,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 700,
                boxShadow: 3,
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: 5,
                },
                transition: "0.3s",
              }}
            >
              Let's Connect
            </Button>
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
