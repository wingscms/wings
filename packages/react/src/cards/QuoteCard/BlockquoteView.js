import React, { Component } from 'react';
import propTypes, { defaultProps } from './propTypes';
import Quote from './Quote';

const Blockquote = Quote;

export default class BlockquoteView extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;
  render() {
    const { text, source, sourceUrl, ...props } = this.props;
    return (
      <Blockquote {...props}>
        <blockquote>{text}</blockquote>
        {!source ? null : (
          <figcaption>{!sourceUrl ? source : <a href={sourceUrl}>{source}</a>}</figcaption>
        )}
      </Blockquote>
    );
  }
}
