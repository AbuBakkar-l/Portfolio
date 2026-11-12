
import React from "react";

import {
  Box,
  Typography,
  Button,
  Card,
  Chip,
  Stack,
} from "@mui/material";

import NorthEastIcon from "@mui/icons-material/NorthEast";

import project1 from "../Assets/img/project1.png";
import project2 from "../Assets/img/project2.png";

// Project Data
const projects = [
  {
    title: "Movie Recommendation App",
    description:
      "Discover and explore movies with personalized recommendations.",
    technologies: ["React.js", "API", "JavaScript"],
    image: project1,
    link: "https://github.com/AbuBakkar-l/movie-app",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern portfolio showcasing my skills, projects, and experience with a clean and responsive design.",
    technologies: ["React.js", "Material UI", "JavaScript"],
    image: project2,
    link: "https://github.com/AbuBakkar-l/portfolio",
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        px: { xs: 2, md: 5, lg: 8 },
        py: { xs: 5, md: 6 },
        background:
          "linear-gradient(135deg, #F0F6FF 0%, #FFFFFF 50%, #EAF2FF 100%)",
      }}
    >
      {/* ================= HEADER ================= */}

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        {/* Left Badge */}

        <Box
          sx={{
            background:
              "linear-gradient(#F4F8FF 0%, #C1D8FF 50%, #F2F7FF 100%)",
            px: 2.5,
            py: 1,
            borderRadius: "30px",
    

          }}
        >
          <Typography
            sx={{
            color: "#0C2147",
              fontSize: "11px",
              fontWeight: 600,
              
            }}
          >
            0/3 My Projects
          </Typography>
        </Box>

        {/* Right Button */}

        <Button
          variant="outlined"
          endIcon={<NorthEastIcon />}
          sx={{
            color: "#0061FF",
            borderColor: "#0061FF",
            borderRadius: "30px",
            px: 2.5,
            py: 1,
            fontSize: "13px",
            fontWeight: 600,
            textTransform: "none",
          }}
        >
          View All Projects
        </Button>
      </Stack>

      {/* ================= HEADING ================= */}

      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "40px" },
            fontWeight: 800,
            color: "#0C2147",
            letterSpacing: "-1.5px",
            lineHeight: 1.2,
          }}
        >
          Things I've{" "}
          <Box
            component="span"
            sx={{ color: "#0061FF" }}
          >
            built.
          </Box>
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#0C2147",
            fontSize: "13px",
            lineHeight: 1.7,
            maxWidth: "350px",
          }}
        >
          A showcase of my best work in web development.
        </Typography>
      </Box>

      {/* ================= PROJECT CARDS ================= */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "repeat(2, minmax(0, 560px))",
          },
          justifyContent: "center",
          gap: 2,
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              width: "100%",
              height: "151px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              boxSizing: "border-box",
              p: "10px",
              gap: "10px",
              border: "1px solid #DCE8FA",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
              overflow: "hidden",
              transition: "0.3s ease",

              "&:hover": {
                boxShadow:
                  "0 8px 20px rgba(0,97,255,0.10)",
                transform: "translateY(-3px)",
                cursor: "pointer",
              },
            }}
          >
            {/* LEFT SIDE: PROJECT IMAGE */}

            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: "207px",
                height: "130px",
                flexShrink: 0,
                objectFit: "cover",
                borderRadius: "8px",
                display: "block",
              }}
            />

            {/* RIGHT SIDE: PROJECT DETAILS */}

            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                height: "130px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                overflow: "hidden",
              }}
            >
              {/* Project Title */}

              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: '800',
                  color: "#0C2147",
                  mb: 0.5,
                  lineHeight: 1.3,
                }}
              >
                {project.title}
              </Typography>

              {/* Project Description */}

              <Typography
                sx={{
                  fontSize: "11.5px",
                  fontfamily: "Inter",
                  color: "#0C2147",
                  lineHeight: 1.4,
                  mb: 1.5,
                  mt: 1,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,   
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {project.description}
              </Typography>

              {/* Technology Chips */}

              <Stack
                direction="row"
                flexWrap="wrap"
                gap={0.5}
                sx={{ mb: 1 }}
              >
                {project.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      height: "19px",
                      backgroundColor: "#E4EDFF",
                      color: "#0C2147",
                      fontSize: "11.5px",
                      borderRadius: "100px",
                      fontfamily: "Inter",
                      py: 1.5,
                      px: 0.8,

                      "& .MuiChip-label": {
                        px: 0.8,
                      },
                    }}
                  />
                ))}
              </Stack>

              {/* View Project Button */}

              <Button
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<NorthEastIcon />}
                sx={{
                  minWidth: 0,
                  p: 0,
                  color: "#0061FF",
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "none",


                //   "& .MuiButton-endIcon": {
                //     ml: 0.5,
                //     mr: 0,
                //   },
                }}
              >
                View Project
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
