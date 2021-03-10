import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import coreStyles from 'react-awesome-slider/src/core/styles.scss';
import animationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

const About = () => {
  return (
    <section id="about">
      <div className="col-md-12">
        <h1
          className="section-title"
          style={{ color: 'black' }}
        >
          <span>About Me</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: 'auto' }}>
                <AwesomeSlider
                  className="profile-pic"
                  bullets={false}
                  animation="cubeAnimation"
                  cssModule={[coreStyles, animationStyles]}
                >
                  {[...Array(5)].map((_, i) => (
                    <div
                      data-src={`img/my-pics/profile-pic-${i}.jpg`}
                      alt="Avatar placeholder"
                    />
                  ))}
                </AwesomeSlider>
                <div className="centered mt-4 justify-content-evenly">
                  <FontAwesomeIcon
                    size="4x"
                    color="rgb(0, 216, 255)"
                    icon={faReact}
                  />
                  <i
                    style={{ fontSize: '3.5rem' }}
                    className="devicon-redux-original colored"
                  ></i>
                  <i
                    style={{ fontSize: '4.5rem' }}
                    className="devicon-nodejs-plain-wordmark colored"
                  ></i>
                </div>
              </span>
            </div>
          </div>

          <div className="col-md-8 centered">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <FontAwesomeIcon
                    color="rgb(237, 76, 92)"
                    icon={faCircle}
                  />{' '}
                  &nbsp;{' '}
                  <FontAwesomeIcon
                    color="rgb(253, 203, 88)"
                    icon={faCircle}
                  />{' '}
                  &nbsp;{' '}
                  <FontAwesomeIcon
                    color="rgb(120, 177, 89)"
                    icon={faCircle}
                  />
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: 'auto',
                    fontSize: '132%',
                    lineHeight: '200%',
                  }}
                >
                  <br />
                  <span className="wave">Hi!!</span>
                  <br />
                  <br />A tenacious self-taught programmer.
                  Believer of hard work, passionate and
                  always moving forward. Seeking
                  opportunities in front end development.
                  Like many other people I enjoy spending my
                  free time increasing my knowledge of Web
                  Development and building new and
                  challenging projects...and gaming when I
                  have the time :P
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
