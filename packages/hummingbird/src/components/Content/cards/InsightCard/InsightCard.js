import React, { Component } from 'react';
import styled from 'styled-components';
import { createCard } from '@wingscms/react';
import propTypes, { defaultProps } from './propTypes';

import wide from '../../../../styles/wide';

const Insight = styled.div`
  font-size: 30px;
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
  line-height: 1.2;
  color: ${({ theme }) => theme.darkHeadingColor};
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  ${wide};
  width: 100vw;
  @media screen and (min-width: 800px) {
    font-size: 60px;
    margin-top: 80px;
    margin-bottom: 80px;
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
    padding: 40px 10px;
    margin: 0 auto;
    @media screen and (min-width: 800px) {
      padding: 80px 0;
    }
  }
`;

class InsightCardView extends Component {
  static defaultProps = defaultProps;
  static setPropTypes = propTypes;
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
