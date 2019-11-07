import React from 'react';
import Link from 'gatsby-link';
import { Button, useTheme } from '@wingscms/crane';
import Layout from '../components/LayoutDefault';
import Navigation from '../components/Navigation';

export default ({
  pageContext: {
    node: { menu },
  },
}) => {
  const theme = useTheme();
  return (
    <div>
      <Layout>
        <Navigation items={menu && menu.items} />
        <h1
          style={{ textAlign: 'center', margin: `${theme.largeSpacing} 0 ${theme.mediumSpacing}` }}
        >
          Uh oh.
        </h1>
        <p style={{ textAlign: 'center', marginBottom: theme.smallSpacing }}>
          We couldn&apos;t find what you were looking for.
        </p>
        <div style={{ textAlign: 'center' }}>
          <Link to="/">
            <Button intent="primary">Go Home</Button>
          </Link>
        </div>
      </Layout>
    </div>
  );
};
