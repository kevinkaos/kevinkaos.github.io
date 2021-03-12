import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from 'react-bootstrap/Badge';

const allExperiences = {
  experiences: [
    {
      company: 'AndroVideo',
      title: 'Front-End Web Developer',
      years: '2020/07 - 2021/03',
      mainTech: ['React', 'NodeJS', 'SCSS'],
      description:
        'Implemented many features for dashboard for AI Camera, learned to debug root cause and fix based on scope of problem, maintained NodeJS backend that connected to Android camera database, worked with GIT submodules and in-depth GIT CLI, used GitLab for CI/CD.',
      className: 'fa-react',
      technologies: [
        'REST API',
        'JavaScript',
        'Bootstrap',
        'SCSS',
        'React-Bootstrap',
        'NodeJS',
        'CI/CD',
        'GIT',
      ],
    },
    {
      company: '鼎羿科技有限公司',
      title: 'Front-End Web Developer',
      years: '2020/03 - 2020/06',
      mainTech: ['Vue'],
      description:
        'Learned to work in-depth with chrome dev tools and mainly worked on pixel perfect recreation of UIUX designs, used Vue as the main framework',
      className: 'fa-vuejs',
      technologies: [
        'JavaScript',
        'REST API',
        'SCSS',
        'GIT',
        'Nuxt',
      ],
    },
    {
      company: 'UnaBiz Taiwan',
      title: 'Front-End Web Developer',
      years: '2019/11 - 2020/03',
      mainTech: ['React'],
      description:
        'First job as a web developer, made React Native mobile application for client with functionality like scanning and submitting data to client database, learned to work with REST API',
      className: 'fa-react',
      technologies: [
        'JavaScript',
        'React',
        'React Native',
        'Material UI',
        'REST API',
        'GraphQL',
      ],
    },
  ],
};

const Experiences = () => {
  const work = allExperiences.experiences.map((work, i) => {
    const technologies = work.technologies;
    const mainTechnologies = work.mainTech;

    const mainTech = mainTechnologies.map(
      (technology, i) => {
        return (
          <Badge
            pill
            className="main-badge mr-2 mb-2"
            key={i}
          >
            {technology}
          </Badge>
        );
      }
    );
    const tech = technologies.map((technology, i) => {
      return (
        <Badge
          pill
          className="experience-badge mr-2 mb-2"
          key={i}
        >
          {technology}
        </Badge>
      );
    });
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={work.years}
        iconStyle={{
          background: '#AE944F',
          color: '#fff',
          textAlign: 'center',
        }}
        icon={
          <i
            className={`fab ${work.className} experience-icon`}
          ></i>
        }
        key={i}
      >
        <div
          style={{
            textAlign: 'left',
            marginBottom: '4px',
          }}
        >
          {mainTech}
        </div>

        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: 'left' }}
        >
          {work.title}
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: 'left' }}
        >
          {work.company}
        </h4>
        <p>{work.description}</p>
        <div
          style={{ textAlign: 'left', marginTop: '15px' }}
        >
          {tech}
        </div>
      </VerticalTimelineElement>
    );
  });

  return (
    <section id="resume">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1
            className="section-title"
            style={{ color: 'black' }}
          >
            <span
              className="text-black"
              style={{ textAlign: 'center' }}
            >
              Experiences
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: '#AE944F',
              color: '#fff',
              textAlign: 'center',
            }}
            icon={
              <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experiences;
