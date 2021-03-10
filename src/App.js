import React from 'react';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experiences from './components/Experiences';

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  );
};

export default App;
