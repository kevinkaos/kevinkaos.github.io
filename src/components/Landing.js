import { Divider } from '@material-ui/core';
import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import '../styles/stars.scss';

const Landing = () => {
  return (
    <div
      id="landing"
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
          <CodeIcon
            style={{ fontSize: 100, color: '#fff' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
