import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactLinks = () => {
  return (
    <div className="contact-links">
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:j.chi2241@gmail.com"
        >
          j.chi2241@gmail.com
        </a>
      </span>
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/justin-chi-64b12b37"
        >
          LinkedIn
        </a>
      </span>
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/jchi2241"
        >
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </span>
    </div>
  );
};

export default ContactLinks;
