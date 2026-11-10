import React from "react";
import { Box, Typography } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

const experiences = [
  {
    icon: <WorkOutlineIcon />,
    title: "2+",
    subtitle: "Years Experience",
  },
  {
    icon: <SchoolOutlinedIcon />,
    title: "BSCS",
    subtitle: "Education",
  },
  {
    icon: <CodeOutlinedIcon />,
    title: "React",
    subtitle: "Expertise",
  },
];

const ExperienceCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 170,
        p: 2.5,
        borderRadius: "20px",
        background: "#FFFFFF",
        border: "1px solid #E5EDFF",
        boxShadow: "0 8px 30px rgba(0, 97, 255, 0.12)",
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        transition: "all 0.3s ease",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 14px 35px rgba(0, 97, 255, 0.18)",
        },
      }}
    >
      {experiences.map((item) => (
        <Box
          key={item.title}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.8,
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0061FF",
              flexShrink: 0,

              "& svg": {
                fontSize: 25,
              },
            }}
          >
            {item.icon}
          </Box>

          {/* Text */}
          <Box>
            <Typography
              sx={{
                color: "#0C2147",
                fontSize: "19px",
                fontWeight: 800,
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.3,
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                color: "#52627A",
                fontSize: "12px",
                fontWeight: 400,
                fontFamily: "Inter, sans-serif",
                mt: 0.3,
                whiteSpace: "nowrap",
              }}
            >
              {item.subtitle}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ExperienceCard;
