import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createCard } from '@wingscms/react';
import styled from 'styled-components';
import wide from '../../styles/wide';

const Figure = styled.figure`
  ${wide};
  max-width: 1160px;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: ${({ theme }) => theme.largeSpacing};
  margin-bottom: ${({ theme }) => theme.largeSpacing};
  .video-wrapper {
    max-width: 1160px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    height: 0;
    padding-bottom: 33%;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    margin-top: ${({ theme }) => theme.mediumSpacing};
    margin-bottom: ${({ theme }) => theme.mediumSpacing};
  }
`;

const getMatches = (target, re) =>
  Object.keys(re).reduce((acc, key) => ({ ...acc, [key]: re[key].exec(target) }), {});

class EmbedCard extends Component {
  static propTypes = {
    src: PropTypes.string,
    html: PropTypes.string,
  };

  static defaultProps = {
    src: '',
    html: '',
  };

  constructor(props) {
    super();
    this.determineDimensions(props);
  }

  state = {
    percentage: 56,
  };

  componentWillReceiveProps(props) {
    this.determineDimensions(props);
  }

  determineDimensions(props = this.props) {
    setTimeout(() => {
      const { width, height } = getMatches(props.html, {
        width: /width="(\d+)"/i,
        height: /height="(\d+)"/i,
      });
      const percentage = (height / width) * 100;
      this.setState({ percentage });
    }, 0);
  }

  render() {
    const { html, ...props } = this.props;

    return (
      <Figure {...props}>
        <div
          className="video-wrapper"
          style={{ paddingBottom: `${this.state.percentage}%` }}
          dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line react/no-danger
        />
      </Figure>
    );
  }
}

export default createCard({
  name: 'EmbedCard',
  renderWith: EmbedCard,
});
