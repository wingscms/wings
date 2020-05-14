import React, { Component } from 'react';
import filterInvalidDOMProps from 'filter-invalid-dom-props';
import { Button, wide } from '@wingscms/components';
import styled from '../lib/styled';
import createCard from '../createCard';
import { t } from '../theme';

const CTA = styled.div`
  ${wide};
  margin-top: ${t(_ => _.largeSpacing)};
  margin-bottom: ${t(_ => _.largeSpacing)};
  width: 100vw;
  text-align: center;
  .inner {
    background: ${t(_ => _.primaryColor)};
    padding: 40px;
    margin: 0 auto;
    max-width: 1160px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    > div {
      width: 25%;
      min-width: 25%;
      max-width: 25%;
      flex-basis: auto;
      margin: 0;
      padding: 0 10px;
    }
    > h2 {
      width: 30%;
      min-width: 30%;
      max-width: 30%;
      flex-basis: auto;
      font-size: 32px;
      color: ${t(_ =>
        _.contrastColor({
          backgroundColor: _.primaryColor || '#ffffff',
        }),
      )};
      text-transform: uppercase;
      text-align: center;
      margin: 0;
      padding: 0 10px;
    }
    > p {
      width: 45%;
      min-width: 45%;
      max-width: 45%;
      flex-basis: auto;
      color: ${t(_ =>
        _.contrastColor({
          backgroundColor: _.primaryColor || '#ffffff',
        }),
      )};
      text-align: left;
      margin: 0;
      padding: 0 10px;
      font-size: 20px;
    }
  }
  @media screen and (max-width: 800px) {
    margin-top: ${t(_ => _.mediumSpacing)};
    margin-bottom: ${t(_ => _.mediumSpacing)};
    .inner {
      padding: 10px;
      flex-direction: column;
      > div,
      > h2,
      > p {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        padding: 10px;
      }
      > h2 {
        font-size: 30px;
        line-height: 38px;
        text-align: center;
      }
      > p {
        text-align: center;
      }
    }
  }
`;

const CTAButton = styled(Button)`
  display: block;
  margin-left: auto;
  text-decoration: none;
  @media screen and (max-width: 800px) {
    margin-right: auto;
    padding: 10px 20px;
    width: 100%;
  }
`;

class CTACardView extends Component {
  render() {
    const { title, text, actionText, actionUrl, ...props } = this.props;
    return (
      <CTA {...filterInvalidDOMProps(props)}>
        <div className="inner">
          <h2>{title}</h2>
          <p>{text}</p>
          <div>
            <a href={actionUrl} style={{ textDecoration: 'none' }}>
              <CTAButton intent={Button.Intent.SECONDARY}>{actionText}</CTAButton>
            </a>
          </div>
        </div>
      </CTA>
    );
  }
}

export default createCard({
  name: 'CTACard',
  renderWith: CTACardView,
});
