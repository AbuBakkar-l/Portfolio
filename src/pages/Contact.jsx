// src/pages/Contact.jsx
import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

export default function Contact() {
  return (
    <Container sx={{ mt: 8 }} id="contact">
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <Box component="form" sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Name" variant="outlined" required />
        <TextField label="Email" variant="outlined" required />
        <TextField label="Message" variant="outlined" multiline rows={4} required />
        <Button type="submit" variant="contained">Send Message</Button>
      </Box>
      <Typography sx={{ mt: 4 }}>
        Email: amabubakar@gmail.com | Phone: +92 03045453820
      </Typography>
    </Container>
  );
}
