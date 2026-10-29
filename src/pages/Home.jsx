import React from "react";
import { Container, Typography, Button, Stack } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h2" gutterBottom>Hi! I’m Abu Bakkar</Typography>
      <Typography variant="h5" gutterBottom>CS Graduate | React & WordPress Developer | Learning AI & ML</Typography>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Button href="/projects" variant="contained">View Projects</Button>
        <Button href="/contact" variant="outlined">Contact Me</Button>
      </Stack>
    </Container>
  );
}
