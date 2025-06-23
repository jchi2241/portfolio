import React from 'react';
import Typewriter from 'components/Typewriter';

const Hero = () => {
  const handleScroll = e => {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-container">
      <Typewriter className="hero-title" text="Justin Chi" />
      <div className="hero-description">
        I am a Software Engineer at SingleStore (formerly MemSQL).<br />My
        passion is building simple, beautiful user experiences.<br />Check out
        my{' '}
        <a href="#projects" onClick={handleScroll}>
          side-projects
        </a>{' '}
        below.
      </div>
    </div>
  );
};

export default Hero;
