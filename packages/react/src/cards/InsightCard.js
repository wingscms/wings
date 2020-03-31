import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '../lib/styled';
import { getContrastColor, wide } from '@wingscms/components';
import createCard from '../createCard';

const Insight = styled.div`
  font-size: 30px;
  font-family: ${({ theme }) => theme.headerFontFamily};
  line-height: 1.2;
  color: ${({ theme }) =>
    getContrastColor({
      backgroundColor: theme.primaryColor || '#ffffff',
      colors: { light: theme.textColor, dark: theme.textColorDark },
      threshold: theme.contrastLuminanceThreshold,
    })};
  text-align: center;
  margin-top: ${({ theme }) => theme.mediumSpacing};
  margin-bottom: ${({ theme }) => theme.mediumSpacing};
  ${wide};
  width: 100vw;
  @media screen and (min-width: 800px) {
    font-size: 60px;
    margin-top: ${({ theme }) => theme.largeSpacing};
    margin-bottom: ${({ theme }) => theme.largeSpacing};
  }
  .inner {
    background: ${({ theme }) => theme.primaryColor};
    margin: 0 auto;
    max-width: 1160px;
  }
  strong {
    display: block;
    max-width: 760px;
    height: 100%;
    padding: ${({ theme }) => theme.mediumSpacing} 10px;
    margin: 0 auto;
    @media screen and (min-width: 800px) {
      padding: ${({ theme }) => theme.largeSpacing} 0;
    }
  }
`;

class InsightCardView extends Component {
  static defaultProps = {
    text: PropTypes.node,
  };
  static defaultProps = {
    text: '',
  };
  render() {
    const { text, ...props } = this.props;
    return (
      <Insight {...props}>
        <div className="inner">
          <strong>{text}</strong>
        </div>
      </Insight>
    );
  }
}

export default createCard({
  name: 'InsightCard',
  renderWith: InsightCardView,
});
