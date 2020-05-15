import React, { Component } from 'react';
import PropTypes from 'prop-types';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import styled from '../../lib/styled';
import { wide } from '@wingscms/components';
import { t } from '../../theme';
import createCard from '../../createCard';

const Insight = styled.div`
  font-size: 30px;
  font-family: ${t(_ => _.headerFontFamily)};
  line-height: 1.2;
  color: ${t(_ =>
    _.contrastColor({
      backgroundColor: _.primaryColor.hex(),
    }),
  )};
  text-align: center;
  margin-top: ${t(_ => _.mediumSpacing)};
  margin-bottom: ${t(_ => _.mediumSpacing)};
  ${wide};
  width: 100vw;
  @media screen and (min-width: 800px) {
    font-size: 60px;
    margin-top: ${t(_ => _.largeSpacing)};
    margin-bottom: ${t(_ => _.largeSpacing)};
  }
  .inner {
    background: ${t(_ => _.primaryColor)};
    margin: 0 auto;
    max-width: 1160px;
  }
  strong {
    display: block;
    max-width: 760px;
    height: 100%;
    padding: ${t(_ => _.mediumSpacing)} 10px;
    margin: 0 auto;
    @media screen and (min-width: 800px) {
      padding: ${t(_ => _.largeSpacing)} 0;
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
      <Insight {...filterInvalidDOMProps(props)}>
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
