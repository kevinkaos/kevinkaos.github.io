import React from 'react';

const myProjects = {
  projects: [
    {
      title: 'Movie Recommendations',
      startDate: '2021',
      description:
        'movie recommendations rwd design using Create react app',
      images: [
        'img/projects/0.png',
        'img/projects/1.png',
        'img/projects/2.png',
        'img/projects/3.png',
        'img/projects/4.png',
        'img/projects/5.png',
        'img/projects/6.png',
      ],
      url:
        'https://kkao-movie-recommendation.herokuapp.com/',
      technologies: [
        {
          class: 'devicon-react-original-wordmark colored',
          name: 'React',
        },
        {
          class: 'devicon-sass-original colored',
          name: 'Sass',
        },
      ],
    },
  ],
};

const Projects = () => {
  const projects = myProjects.projects.map((project) => (
    <div
      className="col-sm-12 col-md-6 col-lg-4"
      key={project.title}
      style={{ cursor: 'pointer' }}
    >
      <span className="portfolio-item d-block">
        <div className="foto" onClick={() => {}}>
          <div>
            <img
              src={project.images[0]}
              alt="projectImages"
              height="230"
              style={{
                marginBottom: 0,
                paddingBottom: 0,
                position: 'relative',
              }}
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
        <h1
          className="section-title"
          style={{ color: 'black' }}
        >
          <span>My Projects</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        {/* <ProjectDetailsModal
          show={this.state.detailsModalShow}
          onHide={detailsModalClose}
          data={this.state.deps}
        /> */}
      </div>
    </section>
  );
};

export default Projects;
