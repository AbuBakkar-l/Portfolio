
import React from "react";

import {
  Box,
  Typography,
  Button,
  Card,
  Stack,
  CardActionArea,
} from "@mui/material";

import NorthEastIcon from "@mui/icons-material/NorthEast";

import article1 from "../Assets/img/React.png";
import article2 from "../Assets/img/JavaScript.png";
import article3 from "../Assets/img/Material UI.png";

// Article Data
const articles = [
  {
    title: "Getting Started with React",
    time: "Apr 20, 2025",
    description: "A beginner-friendly guide to React.js.",
    image: article1,
    link: "#",
  },
  {
    title: "JavaScript ES6+ Features",
    time: "May 15, 2025",
    description: "Modern JavaScript features you should know.",
    image: article2,
    link: "#",
  },
  {
    title: "Material UI in React",
    time: "Jun 10, 2025",
    description: "Build beautiful UIs with MUI.",
    image: article3,
    link: "#",
  },
];

const Articles = () => {
  return (
    <Box
      id="articles"
      sx={{
        px: { xs: 2, md: 5, lg: 8 },
        py: { xs: 5, md: 6 },
        background:
          "linear-gradient(135deg, #F0F6FF 0%, #FFFFFF 50%, #EAF2FF 100%)",
      }}
    >
      {/* HEADER */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4 }}
      >
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
            0{articles.length} My Articles
          </Typography>
        </Box>

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
            "&:hover": {
              backgroundColor: "#EAF2FF",
              borderColor: "#0061FF",
            },
          }}
        >
          View All Articles
        </Button>
      </Stack>

      {/* HEADING + ARTICLE CARDS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "0.85fr repeat(3, minmax(0, 1fr))",
          },
          gap: { xs: 2, md: 2 },
          alignItems: "start",
          width: "100%",
        }}
      >
        {/* LEFT SIDE HEADING */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minWidth: 0,
            pt: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "30px" },
              fontWeight: 800,
              color: "#0C2147",
              letterSpacing: "-1.5px",
              lineHeight: 1.2,
              backgroundcolor: "red",
              m: 0,
            }}
          >
            Latest{" "}
            <Box component="span" sx={{ color: "#0061FF" }}>
              Articles.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 0.5,
              mb: 0,
              color: "#526581",
              fontSize: "12px",
              lineHeight: 1.5,
              maxWidth: "250px",
            }}
          >
            Insights, tutorials and tips on web development and AI.
          </Typography>
        </Box>

        {/* ARTICLE CARDS */}
        {articles.map((article, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              width: "90%",
              minWidth: 0,
              minHeight: "unset",
              boxSizing: "border-box",
              border: "1px solid #DCE8FA",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
              overflow: "hidden",
              transition: "0.3s ease",

              "&:hover": {
                boxShadow: "0 8px 20px rgba(0,97,255,0.10)",
                transform: "translateY(-3px)",
                borderColor: "#B6D0FF",
              },
            }}
          >
            <CardActionArea
              component="a"
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                textAlign: "left",
                p: 1,
                height: "100%",
              }}
            >
              {/* ARTICLE IMAGE */}
              <Box
                component="img"
                src={article.image}
                alt={article.title}
                sx={{
                  width: "100%",
                  height: { xs: "120px", md: "100px" },
                  flexShrink: 0,
                  objectFit: "contain",
                  borderRadius: "8px",
                  backgroundColor: "#F5F8FF",
                  display: "block",
                  m: 0,
                }}
              />

              {/* ARTICLE DATE */}
              <Typography
                sx={{
                  mt: 0.8,
                  mb: 0,
                  fontSize: "10px",
                  fontWeight: 500,
                  color: "#71819B",
                  lineHeight: 1.3,
                }}
              >
                {article.time}
              </Typography>

              {/* ARTICLE TITLE */}
              <Typography
                sx={{
                  mt: 0.4,
                  mb: 0,
                  fontSize: { xs: "14px", md: "13px" },
                  fontWeight: 700,
                  color: "#0C2147",
                  lineHeight: 1.35,
                }}
              >
                {article.title}
              </Typography>

              {/* ARTICLE DESCRIPTION */}
              <Typography
                sx={{
                  mt: 0.4,
                  mb: 0,
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#526581",
                  lineHeight: 1.5,
                }}
              >
                {article.description}
              </Typography>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Articles;
