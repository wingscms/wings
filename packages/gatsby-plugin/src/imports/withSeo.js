import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

export default nodeName => Comp => (props) => {
  if (!props[nodeName]) return <Comp {...props} />;
  const { all, facebook, twitter } = props[nodeName].platforms;
  return (
    <Fragment>
      <Helmet
        title={all.title}
        meta={[
          { name: 'description', content: all.description },

          { property: 'og:title', content: facebook.title },
          { property: 'og:description', content: facebook.description },
          { property: 'og:image', content: facebook.imageUrl },
          { property: 'og:image:secure_url', content: facebook.medium && facebook.medium.url },
          { property: 'og:type', content: nodeName === 'article' ? 'article' : '' },

          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: twitter.title },
          { name: 'twitter:description', content: twitter.description },
          { name: 'twitter:image', content: twitter.medium && twitter.medium.url },
        ]}
      />
      <Comp {...props} />
    </Fragment>
  );
};
