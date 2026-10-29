// src/App.jsx
import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Router from "./routes";
import ProjectCard from "./Components/ProjectCart";
import BlogDetail from "./pages/BlogDetail";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Router />
      {/* <Home/> */}
      <Contact/>
      <BlogDetail/>
      <ProjectCard/>
      <Blog/>
      <About/>
      <Footer />
    </ThemeProvider>
  );
}
