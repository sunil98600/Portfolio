import { useState } from 'react';

import './App.css';
import Hero from './section/Hero';
import About from './section/About';
import Navbar from './componenrts/Navbar';
import Skills from './section/Skills';
import Projects from './section/Projects';
import Resume from './section/Resume';
import Contact from './section/Contact';
import Footer from './componenrts/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
