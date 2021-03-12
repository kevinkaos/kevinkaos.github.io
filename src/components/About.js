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
                      key={i}
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
                  <span className="wave">
                    Hi there &#128513; and welcome to my
                    personal{' '}
                    <u>
                      <i>Front-end web developer</i>
                    </u>{' '}
                    portfolio!
                  </span>
                  <br />
                  <br />
                  People find me to be a <b>hard working</b>
                  , <b>self-motivated</b> and{' '}
                  <b>self-directed learner</b> with
                  excellent <b>communication</b> and{' '}
                  <b>coding</b> skills. For the past couple
                  years I have worked in a few tech start
                  ups as a <b>Front-end web developer</b>.
                  My experience includes working on product
                  setting <b>dashboards</b>, developing
                  React Native <b>mobile</b> apps, making{' '}
                  <b>responsive</b> React web applications
                  all while using different{' '}
                  <b>frameworks</b> and libraries for
                  styling, not to mention{' '}
                  <b>
                    Continuous Integration / Continuous
                    Delivery
                  </b>{' '}
                  with <b>Gitlab</b> and version control
                  with <b>Git CLI</b>. My experience
                  includes a couple different tech stacks,
                  utilizing <b>REST API</b> as well as{' '}
                  <b>GraphQL</b>, also many different UI
                  frameworks and the ability to maintain{' '}
                  <b>NodeJS</b> backend. I have a track
                  record of <i>developing</i>,{' '}
                  <i>maintaining</i> and <i>debugging</i>{' '}
                  well thought out and thorough
                  applications, and I can do the same for
                  your company.
                  <br />
                  <br />I am a dedicated software engineer.
                  I enjoy reading about related articles,
                  and the knowledge and perspective that my
                  reading gives me has strengthened my
                  understanding of project architecture and
                  structure which in turn helps me debug and
                  write better applications. I have been
                  successful at self-directed learning, and
                  I attribute this success to my ability to
                  for the intense craving for more
                  knowledge, discipline, focus and the
                  desire to become better at my craft. These
                  traits will help me in my career where
                  learning is on-going and there will never
                  be a finish line. In other words,{' '}
                  <i>
                    <u>
                      I really enjoy the journey of being a
                      software engineer.
                    </u>
                  </i>
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
