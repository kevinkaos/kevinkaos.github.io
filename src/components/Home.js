import React from 'react';
import '../styles/stars.scss';
import Typical from 'react-typical';

const Home = () => {
  return (
    <div
      id="home"
      style={{
        height: window.innerHeight,
        display: 'block',
      }}
    >
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div
        className="centered row"
        style={{ height: '100%' }}
      >
        <div className="col-md-12">
          <i
            className="devicon-react-original"
            style={{ fontSize: '10rem', color: 'white' }}
          ></i>
          <br />
          <h1 className="intro-name mt-4">Kevin Kao</h1>
          <Typical
            steps={['Front-End Web Developer']}
            wrapper="h1"
            className="intro-titles mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
