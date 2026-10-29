  import React from "react";
  import { Container, Grid, Typography } from "@mui/material";
  import BlogCard from "../Components/BlogCard";

  // Import images directly
  import blog1 from "../Assets/img/blog1.jpg"
  import blog2 from "../Assets/img/blog2.jpg";

  const blogs = [
    { id: 1, title: "Learning React", summary: "A journey into React.js development", img: blog1 },
    { id: 2, title: "AI & ML Basics", summary: "Introduction to AI & Machine Learning", img: blog2 },
  ];

  export default function Blog() {
    return (
      <Container sx={{ mt: 8 }} id="blog">
        <Typography variant="h4" gutterBottom>Blog</Typography>
        <Grid container spacing={2}>
          {blogs.map((blog) => (
            <Grid item xs={12} md={6} key={blog.id}>
              <BlogCard blog={blog} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
