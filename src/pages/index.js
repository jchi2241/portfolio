import React from 'react';

import Layout from 'layouts/index';
import Hero from 'components/Hero';
import About from 'components/About';
import Projects from 'components/Projects';
import ContactLinks from 'components/ContactLinks';

import projects from 'content/projects';
import statements from 'content/about-me';

const Home = () => {
  return (
    <Layout>
      <React.Fragment>
        <Hero />
        <About statements={statements} />
        <h2 id="projects" className="section-title">
          Projects
        </h2>
        <Projects projects={projects} />
        <div className="background" />
        <h2 id="contact" className="section-title">
          Contact me!
        </h2>
        <ContactLinks />
      </React.Fragment>
    </Layout>
  );
};

export default Home;

export const Head = () => (
  <>
    <title>Justin's Portfolio</title>
    <meta name="description" content="Justin Chi's Portfolio" />
    <meta name="keywords" content="justin chi, portfolio, web developer" />
  </>
);
