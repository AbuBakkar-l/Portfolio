// src/pages/About.jsx
import React from "react";
import { Container, Typography, Grid, Box, Stack, Chip } from "@mui/material";

export default function About() {
  const skills = ["React.js", "JavaScript", "HTML/CSS", "DSA", "WordPress", "AI & ML"];

  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>About Me</Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src="/assets/imgs/banner.jpg"
            alt="Abu Bakkar"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body1" paragraph>
            I am Abu Bakkar, a passionate frontend developer skilled in React.js, WordPress, and modern web technologies.
            Currently, I am exploring Artificial Intelligence and Machine Learning.
          </Typography>
          <Typography variant="h6" gutterBottom>Skills:</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {skills.map((skill, idx) => (
              <Chip key={idx} label={skill} color="primary" sx={{ mb: 1 }} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
