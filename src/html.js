import React from 'react';
import * as PropTypes from 'prop-types';

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
};

const Html = props => {
  return (
    <html op="news" lang="en">
      <head>
        {props.headComponents}

        <meta name="referrer" content="origin" />
        <meta charSet="utf-8" />
        <meta name="description" content="Justin Chi's Portfolio" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <title>Justin's Portfolio</title>
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

Html.propTypes = propTypes;

export default Html;
