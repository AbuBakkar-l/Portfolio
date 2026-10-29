
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={project.img}
        alt={project.title}
      />

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {project.title}
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          {project.description}
        </Typography>

        <Button
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
        >
          View on GitHub
        </Button>
      </CardContent>
    </Card>
  );
}
