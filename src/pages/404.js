import React from 'react';
import Layout from 'layouts/index';

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;

export const Head = () => <title>Not Found</title>;
