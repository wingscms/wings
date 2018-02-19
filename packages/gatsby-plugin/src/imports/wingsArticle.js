import React, { Fragment } from 'react';
import { compose, mapProps } from 'recompose';
import Helmet from 'react-helmet';

const mp = mapProps(({ pathContext: { article } }) => ({ article }));
const withSeo = Comp => (props) => {
  const { all, facebook, twitter } = props.article.platforms;
  return (
    <Fragment>
      <Helmet
        title={all.title}
        meta={[
          { name: 'description', content: all.description },

          { name: 'og:title', content: facebook.title },
          { name: 'og:description', content: facebook.description },
          { name: 'og:image', content: facebook.imageUrl },
          { name: 'og:image:secure_url', content: facebook.imageUrl },
          { name: 'og:type', content: 'article' },

          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: twitter.title },
          { name: 'twitter:description', content: twitter.description },
          { name: 'twitter:image', content: twitter.imageUrl },
        ]}
      />
      <Comp {...props} />
    </Fragment>
  );
};

export default compose(mp, withSeo);
