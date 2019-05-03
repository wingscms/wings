/* eslint-disable max-len */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMenuItem = styled.li`
  list-style: none;
  position: relative;
  padding: 0;
  margin: 0;
`;

const StandardLink = ({ children, target, to }) => (
  <a className="standard" href={to} target={target}>
    {children}
  </a>
);

export default class MenuItem extends Component {
  static propTypes = {
    /** Whether the link is to an external site and should behave differently than an internal link (use the ExternalLink component) */
    external: PropTypes.bool,
    /** Component to use to render an external link */
    ExternalLink: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
      PropTypes.shape({ render: PropTypes.func }),
    ]),
    /** Url/image code to render an icon next to the link */
    icon: PropTypes.string,
    /** Component to use to render an internal link */
    InternalLink: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
      PropTypes.shape({ render: PropTypes.func }),
    ]),
    /** Whether to apply a 'special' class, can be used to style CTA buttons, etc */
    special: PropTypes.bool,
    /** Whether to apply a 'current' class */
    current: PropTypes.bool,
    /** Link target */
    target: PropTypes.string,
    /** Link text */
    text: PropTypes.string.isRequired,
    /** Link url */
    to: PropTypes.string.isRequired,
  };

  static defaultProps = {
    external: false,
    ExternalLink: StandardLink,
    icon: '',
    InternalLink: StandardLink,
    special: false,
    current: false,
    target: '',
  };

  render() {
    const {
      children,
      current,
      external,
      ExternalLink,
      icon,
      InternalLink,
      special,
      target,
      text,
      to,
    } = this.props;

    return (
      <StyledMenuItem
        {...this.props}
        className={`${special ? 'special ' : ''}${current ? 'current ' : ''}${
          this.props.className
        }`}
      >
        {external ? (
          <ExternalLink to={to} target={target}>
            {text}
            {icon ? <img src={icon} alt="" /> : null}
          </ExternalLink>
        ) : (
          <InternalLink to={to} target={target}>
            {text}
            {icon ? <img src={icon} alt="" /> : null}
          </InternalLink>
        )}
        {children}
      </StyledMenuItem>
    );
  }
}
