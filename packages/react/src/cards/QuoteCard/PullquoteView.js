import React, { Component } from 'react';
import classNames from 'classnames';
import propTypes, { defaultProps } from './propTypes';
import Quote from './Quote';

export default class PullquoteView extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;
  render() {
    const { text, source, sourceUrl, float, className, ...props } = this.props;
    return (
      <Quote {...props} className={classNames(`pullquote-${float}`, className)}>
        <aside>{text}</aside>
        {!source ? null : (
          <figcaption>{!sourceUrl ? source : <a href={sourceUrl}>{source}</a>}</figcaption>
        )}
      </Quote>
    );
  }
}
