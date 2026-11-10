
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";

import { FiArrowRight, FiCode } from "react-icons/fi";

import {
  SiReact,
  SiMui,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiJson,
  SiBootstrap,
  SiPython,
  SiGit,
  SiGithub,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "React JS", icon: <SiReact />, color: "#087EA4" },
  { name: "Material UI", icon: <SiMui />, color: "#007FFF" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#D6A500" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#E44D26" },
  { name: "CSS3", icon: <SiCss />, color: "#1572B6" },
  { name: "JSON", icon: <SiJson />, color: "#0C2147" },
  { name: "AJAX", icon: <FiCode />, color: "#0061FF" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "GitHub", icon: <SiGithub />, color: "#181717" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 7, md: 11 },
        backgroundColor: "#FFFFFF",
      }}
    >
      <Container maxWidth="lg">

        {/* Top Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {/* Section Badge */}
          <Box
            sx={{
              background:
                "linear-gradient(#F4F8FF 0%, #C1D8FF 50%, #F2F7FF 100%)",
              color: "#0C2147",
              px: 2.5,
              py: 1,
              borderRadius: "100px",
              fontSize: "11px",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.5px",
            }}
          >
            02 / My Skills
          </Box>

          {/* View All Skills Button */}
          <Button
            variant="outlined"
            onClick={() => setShowAll(!showAll)}
            endIcon={<FiArrowRight />}
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
            {showAll ? "Show Less" : "View All Skills"}
          </Button>
        </Box>

        {/* Heading */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h3"
            sx={{
              color: "#0061FF",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: {
                xs: "30px",
                sm: "38px",
                md: "44px",
              },
              letterSpacing: "-1.5px",
              mb: 1.5,
            }}
          >
            Technologies I work with.
          </Typography>

          <Typography
            sx={{
              color: "#0C2147",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: 1.8,
              maxWidth: "520px",
            }}
          >
            Tools and technologies I use to bring digital
            ideas to life.
          </Typography>
        </Box>

        {/* Skills Grid */}
        <Box
         sx={{
            display: "grid",
            gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(6, 1fr)",
            },
            gap: { xs: 1.5, md: 2 },
            cursor:"pointer",
        }}
        >
          {visibleSkills.map((skill) => (
            <Box
              key={skill.name}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                minHeight: "145px",
                p: 2.5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1.5,
                boxShadow:
                  "0px 3px 12px rgba(12, 33, 71, 0.06)",
                border: "1px solid rgba(0, 97, 255, 0.05)",
                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow:
                    "0px 10px 25px rgba(0, 97, 255, 0.12)",
                  backgroundColor: "#fbfdff",
                },
              }}
            >
              {/* Technology Icon */}
              <Box
                sx={{
                  fontSize: "35px",
                  color: skill.color,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {skill.icon}
              </Box>

              {/* Technology Name */}
              <Typography
                sx={{
                  color: "#0C2147",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default Skills;
