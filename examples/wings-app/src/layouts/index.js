import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { compose, setPropTypes } from 'recompose';
import Header from '../components/Header';
import './index.css';


export default compose(
  setPropTypes({
    children: PropTypes.func.isRequired,
  }),
)(({ children }) => (
  <div>
    <Helmet
      title="Gatsby Wings Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
));
