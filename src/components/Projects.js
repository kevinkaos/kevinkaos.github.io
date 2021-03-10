import React, { useState, useRef } from 'react';
import ProjectDetails from './ProjectDetails';

const myProjects = {
  projects: [
    {
      title: 'Movie Recommendations',
      startDate: '2021',
      description:
        'movie recommendations rwd design using Create react app',
      images: [
        'img/movie-recommendations/0.png',
        'img/movie-recommendations/1.png',
        'img/movie-recommendations/2.png',
        'img/movie-recommendations/3.png',
        'img/movie-recommendations/4.png',
        'img/movie-recommendations/5.png',
        'img/movie-recommendations/6.png',
      ],
      url:
        'https://kkao-movie-recommendation.herokuapp.com/',
      technologies: [
        {
          class: 'devicon-react-original-wordmark colored',
          name: 'React',
        },
        {
          class: 'devicon-redux-original colored',
          name: 'Redux',
        },
        {
          class: 'devicon-sass-original colored',
          name: 'Sass',
        },
      ],
    },
    {
      title: 'Movie Finder',
      startDate: '2019',
      description: 'movie finder app',
      images: [
        'img/movie-finder/0.png',
        'img/movie-finder/1.png',
        'img/movie-finder/2.png',
      ],
      url: 'https://kkao-movie-finder.herokuapp.com/',
      technologies: [
        {
          class: 'devicon-react-original-wordmark colored',
          name: 'React',
        },
        {
          class: 'devicon-redux-original colored',
          name: 'Redux',
        },
      ],
    },
    {
      title: 'Simple Todo App',
      startDate: '2020',
      description:
        'Simple todo app with several features...to be added',
      images: ['img/todo-app/0.png'],
      url:
        'https://kevinkaos.github.io/andro-video-homework/',
      technologies: [
        {
          class: 'devicon-react-original-wordmark colored',
          name: 'React',
        },
        {
          class: 'devicon-materialui-plain colored',
          name: 'Material UI',
        },
      ],
    },
  ],
};

const Projects = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const dataRef = useRef();
  const closeModal = () => setIsShowModal(false);

  const projects = myProjects.projects.map((project) => (
    <div
      className="col-sm-12 col-md-6 col-lg-4"
      key={project.title}
      style={{ cursor: 'pointer' }}
    >
      <span className="portfolio-item d-block">
        <div
          className="foto"
          onClick={() => {
            dataRef.current = project;
            setIsShowModal(true);
          }}
        >
          <div>
            <img
              src={project.images[0]}
              alt="projectImages"
              height="230"
              className="position-relative mb-0 pb-0"
            />
            <span className="project-date">
              {project.startDate}
            </span>
            <br />
            <p className="project-title-settings mt-3">
              {project.title}
            </p>
          </div>
        </div>
      </span>
    </div>
  ));
  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title text-black">
          <span>My Projects</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        <ProjectDetails
          show={isShowModal}
          onHide={closeModal}
          data={dataRef}
        />
      </div>
    </section>
  );
};

export default Projects;
