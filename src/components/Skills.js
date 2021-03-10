import React from 'react';

const skillsList = {
  skills: {
    icons: [
      {
        name: 'HTML 5',
        class: 'devicon-html5-plain-wordmark colored',
      },
      {
        name: 'CSS 3',
        class: 'devicon-css3-plain-wordmark colored',
      },
      {
        name: 'React',
        class: 'devicon-react-original-wordmark colored',
      },
      {
        name: 'Redux',
        class: 'devicon-redux-original colored',
      },
      {
        name: 'JavaScript',
        class: 'devicon-javascript-plain colored',
      },
      {
        name: 'NodeJS',
        class: 'devicon-nodejs-plain-wordmark colored',
      },
      {
        name: 'Sass',
        class: 'devicon-sass-original colored',
      },
      {
        name: 'Bootstrap',
        class: 'devicon-bootstrap-plain-wordmark colored',
      },
      {
        name: 'Git',
        class: 'devicon-git-plain-wordmark colored',
      },
      {
        name: 'Vue',
        class: 'devicon-vuejs-plain-wordmark colored',
      },
    ],
  },
};
const Skills = () => {
  const skills = skillsList.skills.icons.map((skill) => (
    <li className="list-inline-item mx-3" key={skill.name}>
      <span>
        <div className="text-center skills-tile">
          <i
            className={skill.class}
            style={{ fontSize: '6rem' }}
          ></i>
        </div>
      </span>
    </li>
  ));
  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-black">My Skills</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">
            {skills}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
