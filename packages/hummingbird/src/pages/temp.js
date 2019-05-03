import React from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

export default () => (
  <div>
    <Layout>
      <Navigation />
      <div style={{ textAlign: 'center' }}>
        Welcome to your new Hummingbird application. Refer to the Wings docs for further
        instructions.
      </div>
    </Layout>
  </div>
);
