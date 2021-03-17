import React, { useState, useRef } from 'react';
import ProjectDetails from './ProjectDetails';

const myProjects = {
  projects: [
    {
      title: 'Movie Recommendations',
      startDate: '2021',
      description:
        'A responsive mobile compatible web application for browsing and searching for your favorite movies! Created with React Create-React-App, Redux, and React-Router. Styling was done with css pre-processor and Material UI Framework',
      images: [
        {
          src: 'img/movie-recommendations/0.png',
          mobileView: false,
          title: 'placeholder',
        },
        {
          src: 'img/movie-recommendations/1.png',
          mobileView: true,
          title: 'placeholder',
        },
        {
          src: 'img/movie-recommendations/2.png',
          mobileView: true,
          title: 'placeholder',
        },
        {
          src: 'img/movie-recommendations/3.png',
          mobileView: true,
          title: 'placeholder',
        },
        {
          src: 'img/movie-recommendations/4.png',
          mobileView: true,
          title: 'placeholder',
        },
        {
          src: 'img/movie-recommendations/5.png',
          mobileView: true,
          title: 'placeholder',
        },
        {
          src: 'img/movie-recommendations/6.png',
          mobileView: true,
          title: 'placeholder',
        },
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
      title: 'Chat Application',
      startDate: '2021',
      description:
        'Made with Scss, React using Hooks, Redux and React Router on the Front-end, used Firebase for cloud backend and real-time database',
      images: [
        {
          src: 'img/chat-app/0.png',
          mobileView: false,
          title: 'placeholder',
        },
        {
          src: 'img/chat-app/1.png',
          mobileView: false,
          title: 'placeholder',
        },
        {
          src: 'img/chat-app/2.png',
          mobileView: false,
          title: 'placeholder',
        },
      ],
      url: 'https://chat-app-92e40.web.app/',
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
        {
          class: 'devicon-firebase-plain-wordmark colored',
          name: 'Firebase',
        },
      ],
    },
    {
      title: 'Simple Todo App',
      startDate: '2020',
      description:
        'Simple todo app with several features...aside from the usual todo list features, I implemented a custom queue to deleting todo items, also includes a custom implemented sorting algorithm',
      images: [
        {
          src: 'img/todo-app/0.png',
          mobileView: false,
          title: 'placeholder',
        },
      ],
      url: 'https://kevinkaos.github.io/simple-todo-app/',
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
    {
      title: 'Movie Finder',
      startDate: '2019',
      description:
        'My very first application made with TMDB API, this is the version 1 of Movie Recommendations app, uses react and redux',
      images: [
        {
          src: 'img/movie-finder/0.png',
          mobileView: false,
          title: 'placeholder',
        },
        {
          src: 'img/movie-finder/1.png',
          mobileView: false,
          title: 'placeholder',
        },
        {
          src: 'img/movie-finder/2.png',
          mobileView: false,
          title: 'placeholder',
        },
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
              src={project.images[0].src}
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
          <span style={{ color: 'black' }}>
            My Projects
          </span>
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
