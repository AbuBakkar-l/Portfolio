
import React from "react";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const Contact = () => {

  // Common input styling
  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#FFFFFF",
      borderRadius: "10px",
      color: "#0C2147",
      fontFamily: "Inter, sans-serif",

      "& fieldset": {
        borderColor: "#DCE5F0",
      },

      "&:hover fieldset": {
        borderColor: "#0671F0",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#0671F0",
      },
    },

    "& input": {
      fontSize: "12px",
    },

    "& textarea": {
      fontSize: "12px",
    },

    "& .MuiInputLabel-root": {
      color: "#52647D",
    },
  };

  // Social icon styling
  const socialStyle = {
    color: "#FFFFFF",
    width: 25,
    height: 25,
    transition: "all 0.3s ease",

    "&:hover": {
      transform: "translateY(-1px)",
    },
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:amabubakar121@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Box
      id="contact"
      sx={{
        background:
          "linear-gradient(135deg, #0671F0 0%, #8EBCFF 50%, #3F8FF4 100%)",
        borderTopLeftRadius: "100px",
        borderTopRightRadius: "100px",
        py: { xs: 2, md: 3 },
        px: { xs: 2, md: 3 },
        mt: { xs: 0, md: 1 },

        fontFamily: "Inter, sans-serif",
      }}
    >
      <Container maxWidth="lg">

        {/* CONTACT BADGE */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            color: "#0C2147",
            borderRadius: "30px",
            px: 2.5,
            py: 1,
            mb: 5,

            fontSize: "11px",
            fontWeight: 700,
            fontFamily: "Inter, sans-serif",
          }}
        >
          05 / Contact Me
        </Box>

        {/* MAIN GRID */}
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },

            gap: { xs: 6, md: 10 },
            alignItems: "center",
          }}
        >

          {/* LEFT SIDE - CONTACT DETAILS */}
          <Box>

            {/* Heading */}
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "25px",
                fontWeight: 700,
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.5,
                mb: 1,
              }}
            >
              Have a project in mind?
              <br />
              Let's work together!
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "15px",
                fontWeight: 400,
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.8,
                maxWidth: "420px",
                mb: 1.5 ,
              }}
            >
              Feel free to reach out for collaboration,
              opportunities or just a friendly hello.
            </Typography>

            {/* Email Details */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mb: 4 }}
            >
              <IconButton
                component="a"
                href="mailto:amabubakar121@gmail.com"
                sx={socialStyle}
                aria-label="Send email"
              >
                <EmailOutlinedIcon />
              </IconButton>

              <Box>
                <Typography
                  component="a"
                  href="mailto:amabubakar121@gmail.com"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "13px",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  amabubakar121@gmail.com
                </Typography>
                
              </Box>
            </Stack>

          </Box>

          {/* RIGHT SIDE - CONTACT FORM */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
              width: "100%",
              minWidth: 0,
            }}
          >

            {/* NAME + EMAIL - ALWAYS ONE LINE */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
                gap: 2,
                width: "100%",
              }}
            >
              <TextField
                name="name"
                placeholder="Your Name"
                fullWidth
                required
                sx={inputStyle}
              />

              <TextField
                name="email"
                type="email"
                placeholder="Your Email"
                fullWidth
                required
                sx={inputStyle}
              />
            </Box>

            {/* MESSAGE - FULL WIDTH */}
            <TextField
              name="message"
              placeholder="Write your message..."
              multiline
              rows={5}
              fullWidth
              required
              sx={inputStyle}
            />

            {/* SEND BUTTON - FULL WIDTH */}
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendRoundedIcon />}
              sx={{
                backgroundColor: "#0671F0",
                color: "#FFFFFF",

                fontSize: "12px",
                fontWeight: 700,
                fontFamily: "Inter, sans-serif",

                textTransform: "none",
                py: 1,
                width: "100%",
                borderRadius: "10px",

                boxShadow: "none",
                transition: "all 0.3s ease",

                "&:hover": {
                  boxShadow: "none",
                },
              }}
            >
              Send Message
            </Button>

          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
