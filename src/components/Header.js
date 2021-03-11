import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 50) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                href="#home"
                onClick={() => updateExpanded(false)}
              >
                <i className="fas fa-home"></i> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#about"
                onClick={() => updateExpanded(false)}
              >
                <i className="far fa-user"></i> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#skills"
                onClick={() => updateExpanded(false)}
              >
                <i className="far fa-code"></i> Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#portfolio"
                onClick={() => updateExpanded(false)}
              >
                <i className="far fa-tasks"></i> Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#resume"
                onClick={() => updateExpanded(false)}
              >
                <i className="fab fa-codepen"></i>{' '}
                Experiences
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
