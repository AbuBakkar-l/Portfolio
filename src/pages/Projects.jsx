
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ProjectCard from "../Components/ProjectCart";

// Import images
import project1 from "../Assets/img/project1.jpg";
import project2 from "../Assets/img/project2.jpg";

const projects = [
  {
    id: 1,
    title: "Movie Recommendation App",
    description: "React + API project",
    img: project1,
    github: "https://github.com/AbuBakkar-l/movie-app",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "React + MUI + GitHub Pages",
    img: project2,
    github: "https://github.com/AbuBakkar-l/portfolio",
  },
];

export default function Projects() {
  return (
    <Container sx={{ mt: 8 }} id="projects">
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>

      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
