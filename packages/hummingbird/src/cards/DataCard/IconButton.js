/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import { withTheme } from 'styled-components';

const provideColors = Comp => ({ theme, color, hoverColor, ...props }) => (
  <Comp color={theme.primaryColor} hoverColor={theme.primaryColor} {...props} />
);

const Arrow = props => (
  <svg
    style={props.style}
    width="24px"
    height="20px"
    viewBox="1161 2366 24 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1185,2375.99981 L1175,2366.14486 C1174.77995,2365.95171 1173.49612,2365.95171 1173,2366.14486 C1171.91461,2367.49883 1171.91461,2368.75277 1173,2370.08684 L1177,2374.02882 L1163,2374.02882 C1161.90719,2373.9686 1161,2374.85607 1161,2375.99981 C1161,2377.04303 1161.90719,2377.93049 1163,2377.97081 L1177,2377.97081 L1173,2381.91279 C1171.81336,2383.24537 1171.81336,2384.50129 1173,2385.85477 C1173.39487,2386.04841 1174.67668,2386.04841 1175,2385.85477 L1185,2375.99981 Z"
      id="Fill-1"
      stroke="none"
      fillRule="evenodd"
    />
  </svg>
);

const Play = props => (
  <svg
    style={props.style}
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
  >
    <path
      fillRule="evenodd"
      d="M18 36c9.941 0 18-8.059 18-18s-8.059-18-18-18-18 8.059-18 18 8.059 18 18 18zm-6-26l16 8-16 8v-16z"
    />
  </svg>
);

class IconButton extends Component {
  static propTypes = {
    arrowRight: PropTypes.bool.isRequired,
    arrowLeft: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    hoverColor: PropTypes.string.isRequired,
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {},
  };

  getIconType = () => {
    switch (true) {
      case this.props.arrowRight:
        return 'arrowRight';
      case this.props.arrowLeft:
        return 'arrowLeft';
      case this.props.play:
        return 'play';
      default:
        return 'arrow';
    }
  };

  styles = () => ({
    base: {
      display: 'inline-block',
      width: 24,
      height: 24,
      marginTop: 0,
      marginRight: 12,
      marginBottom: 0,
      marginLeft: 12,
      color: this.props.color,
      cursor: 'pointer',
      transition: 'color .1s linear',
      ':hover': {
        color: this.props.hoverColor,
      },
    },
    arrowRight: {
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '100%',
    },
    arrowLeft: {
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%) rotate(180deg)',
      width: '100%',
    },
  });

  render() {
    const styles = this.styles();
    const iconType = this.getIconType();

    return (
      <div style={{ ...styles.base, ...this.props.style }}>
        <style>
          {`
            body, svg {
              fill: currentColor;
            }
          `}
        </style>
        {this.props.arrowRight ? (
          <Arrow style={styles[iconType]} />
        ) : this.props.arrowLeft ? (
          <Arrow style={styles[iconType]} />
        ) : this.props.play ? (
          <Play style={styles[iconType]} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default withTheme(provideColors(radium(IconButton)));
