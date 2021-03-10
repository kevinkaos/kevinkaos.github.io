import React from 'react';

const social = {
  basic_info: {
    name: 'Kevin Kao',
    social: [
      {
        name: 'github',
        url: 'https://github.com/kevinkaos',
        class: 'fab fa-github',
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/kev1n_moo/',
        class: 'fab fa-instagram',
      },
    ],
  },
};

const Footer = () => {
  const footerInfo = social.basic_info.social.map(
    (social) => (
      <span key={social.name} className="m-4">
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={social.class}></i>
        </a>
      </span>
    )
  );
  return (
    <footer id="footer">
      <div className="col-md-12">
        <div className="social-links">{footerInfo}</div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>
              Copyright &copy; {social.basic_info.name}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
