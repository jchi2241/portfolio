import React from 'react';

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <a href="#projects" onClick={e => handleScroll(e, 'projects')}>
          Projects
        </a>
        <a href="#contact" onClick={e => handleScroll(e, 'contact')}>
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
