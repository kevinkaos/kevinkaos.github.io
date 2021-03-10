import React from 'react';
import '../styles/stars.scss';
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
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
          <FontAwesomeIcon
            size="10x"
            color="white"
            icon={faLaptopCode}
          />
          <br />
          <h1 className="intro-name mt-4">Kevin Kao</h1>
          <Typical
            steps={['Front-end Developer']}
            wrapper="h1"
            className="intro-titles"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
