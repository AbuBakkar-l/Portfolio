import React from "react";

import Hero from "../Components/HeroSection";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Project";
import Contact from "../Components/Contact";
import Reveal from "../Components/Reveal";

const Home = () => {
  return (
    <>
      <Reveal distance={20}>
        <Hero />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
};

export default Home;
