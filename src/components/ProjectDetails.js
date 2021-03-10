import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import 'react-awesome-slider/dist/styles.css';

const ProjectDetails = ({
  onHide,
  show,
  data: { current = [] },
}) => {
  const title = current?.title;
  const description = current?.description;
  const url = current?.url;

  const tech = current?.technologies?.map((icons, i) => {
    return (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div className="text-center">
            <i
              className={icons.class}
              style={{ fontSize: '5rem' }}
            ></i>
          </div>
        </span>
      </li>
    );
  });

  const img = current?.images?.map((elem, i) => {
    return <div key={i} data-src={elem} />;
  });

  return (
    <Modal
      show={show}
      onHide={() => onHide()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <span
        onClick={() => onHide()}
        className="modal-close"
      >
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div
          className="col-md-10 mx-auto"
          style={{ paddingBottom: '50px' }}
        >
          <div className="slider-tab">
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
          <AwesomeSlider
            animation="cubeAnimation"
            className="slider-image"
          >
            {img}
          </AwesomeSlider>
        </div>
        <div className="col-md-10 mx-auto">
          <h3>
            <span>{title}</span>
            {'  '}
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i className="fas fa-external-link-alt ml-2"></i>
              </a>
            ) : null}
          </h3>
          <p className="modal-description">{description}</p>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto">{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
