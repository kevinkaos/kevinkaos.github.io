import React from 'react';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
