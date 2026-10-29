// src/components/Footer.jsx
import React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ mt: 5, py: 3, textAlign: "center", bgcolor: "primary.main", color: "white" }}>
      <Typography>© 2025 Abu Bakkar. All rights reserved.</Typography>
      <Typography>
        Email: <Link href="mailto:amabubakar" color="inherit">amabubakar</Link> | Phone: +92 03045453820
      </Typography>
    </Box>
  );
}
