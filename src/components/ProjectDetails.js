import React, { useState, useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { PhotoSwipe } from 'react-photoswipe-2';
import 'react-photoswipe-2/lib/photoswipe.css';

const ProjectDetails = ({
  onHide,
  show,
  data: { current = [] },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const escapeFunction = (e) => {
      if (e.keyCode === 27) {
        return setIsOpen(false);
      }
    };
    document.addEventListener(
      'keydown',
      escapeFunction,
      false
    );

    return () => {
      document.removeEventListener(
        'keydown',
        escapeFunction,
        false
      );
    };
  }, []);
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

  const img = current?.images?.map((elem) => {
    return <div key={elem.src} data-src={elem.src} />;
  });

  const largeImgSwipe = current?.images?.map((el) => {
    if (el.mobileView) {
      return {
        src: el.src,
        w: 630,
        h: 1352,
        title: `Mobile View - ${el.title}`,
      };
    } else {
      return {
        src: el.src,
        w: 1906,
        h: 943,
        title: `Desktop View - ${el.title}`,
      };
    }
  });

  return (
    <Modal
      backdrop="static"
      show={show}
      onHide={() => onHide()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <div className="d-flex">
        <span
          onClick={() => onHide()}
          className="modal-close"
          style={{ cursor: 'pointer' }}
        >
          <i className="fas fa-times fa-2x close-icon p-3"></i>
        </span>
        <span
          onClick={() => setIsOpen(true)}
          className="modal-close"
          style={{ cursor: 'pointer' }}
        >
          <i className="fas fa-2x fa-search-plus p-3"></i>
        </span>
      </div>
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
          <PhotoSwipe
            items={largeImgSwipe || []}
            isOpen={isOpen}
            onClose={handleClose}
          />
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
