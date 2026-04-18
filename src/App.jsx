import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Navbar/Hero/Hero';
import Services from './components/Navbar/Services/Services';
import About from './components/Navbar/About/About';
import Skills from './components/Navbar/Skills/Skills';
import Projects from './components/Navbar/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import Github from './components/Github/Github';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsApp from './components/WhatsApp/WhatsApp';
import Pricing from './components/Pricing/Pricing';

function App() {

return (
  <>

  <Navbar />
  <Hero />
  <Services />
  <About />
  <Skills />
  <Projects />
  <Github />
  <TechStack />
  <Pricing />
  <Contact />
  <WhatsApp />
  <Footer />

  </>
)

}

export default App