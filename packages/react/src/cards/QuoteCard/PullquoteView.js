import React from 'react';
import { compose, setPropTypes, setStatic } from 'recompose';
import classNames from 'classnames';
import propTypes, { defaultProps } from './propTypes';
import Quote from './Quote';

export default compose(
  setPropTypes(propTypes),
  setStatic('defaultProps', defaultProps),
)(({ text, source, sourceUrl, float, className, ...props }) => (
  <Quote {...props} className={classNames(`pullquote-${float}`, className)}>
    <aside>{text}</aside>
    {!source ? null : (
      <figcaption>{!sourceUrl ? source : <a href={sourceUrl}>{source}</a>}</figcaption>
    )}
  </Quote>
));
