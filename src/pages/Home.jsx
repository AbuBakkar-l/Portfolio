
import React from "react";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Project";
import Articles from "../Components/Artical";
import Contact from "../Components/Contact";
export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Articles />
      <Contact />
    </> 
  );
}
