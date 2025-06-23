import React from 'react';
import PropTypes from 'prop-types';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import 'fontawesome';

const Layout = ({ children }) => {
  return (
    <div className="container-lg">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
