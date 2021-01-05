import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import { _WIDE, Surface as _Surface } from '@wingscms/components';
import styled from '../../lib/styled';
import createCard from '../../createCard';
import { t } from '../../theme';

const Surface = styled(_Surface)`
  ${_WIDE};
  max-width: 1160px;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: ${t(_ => _.largeSpacing)};
  margin-bottom: ${t(_ => _.largeSpacing)};
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
    margin-top: ${t(_ => _.mediumSpacing)};
    margin-bottom: ${t(_ => _.mediumSpacing)};
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

  UNSAFE_componentWillReceiveProps(props) {
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
    const resourceId = qs.parse(this.props.src.split('?')[1]).v;
    return (
      <Surface elevation={1} {...filterInvalidDOMProps(props)}>
        <div
          className="video-wrapper"
          style={{ paddingBottom: `${this.state.percentage}%` }}
          dangerouslySetInnerHTML={{
            __html: `<iframe width="480" height="270" src="https://www.youtube.com/embed/${resourceId}?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
          }} // eslint-disable-line react/no-danger
        />
      </Surface>
    );
  }
}

export default createCard({
  name: 'EmbedCard',
  renderWith: EmbedCard,
});
