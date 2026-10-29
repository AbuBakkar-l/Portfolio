// src/pages/BlogDetail.jsx
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();

  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>Blog Post #{id}</Typography>
      <Typography variant="body1" paragraph>
        This is a placeholder for blog content. You can replace it with your actual blog text.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Comments</Typography>
        <Typography variant="body2">Comment section coming soon!</Typography>
      </Box>
    </Container>
  );
}
