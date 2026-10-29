import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

export default function BlogCard({ blog }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={blog.img}
        alt={blog.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">{blog.title}</Typography>
        <Typography variant="body2" color="text.secondary">{blog.summary}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={`/blog/${blog.id}`}>Read More</Button>
      </CardActions>
    </Card>
  );
}
