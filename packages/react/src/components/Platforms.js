import React, { Fragment } from 'react';

export default ({ data }) => {
  const { all, facebook, twitter } = data;
  return (
    <Fragment>
      <title>{all.title}</title>
      <meta name="description" content={all.description} />

      <meta property="og:title" content={facebook.title} />
      <meta property="og:description" content={facebook.description} />
      <meta property="og:image" content={facebook.imageUrl} />
      <meta property="og:image:secure_url" content={facebook.imageUrl} />
      <meta property="og:type" content="article" />

      <meta name="twitter:title" content={twitter.title} />
      <meta name="twitter:description" content={twitter.description} />
      <meta name="twitter:image" content={twitter.imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Fragment>
  );
};
