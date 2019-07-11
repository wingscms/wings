import React from 'react';
import { compose, setPropTypes, setStatic } from 'recompose';
import propTypes, { defaultProps } from './propTypes';
import Quote from './Quote';

const Blockquote = Quote;

export default compose(
  setPropTypes(propTypes),
  setStatic('defaultProps', defaultProps),
)(({ text, source, sourceUrl, ...props }) => (
  <Blockquote {...props}>
    <blockquote>{text}</blockquote>
    {!source ? null : (
      <figcaption>{!sourceUrl ? source : <a href={sourceUrl}>{source}</a>}</figcaption>
    )}
  </Blockquote>
));
