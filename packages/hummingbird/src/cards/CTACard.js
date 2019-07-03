import React, { Component } from 'react';
import styled from 'styled-components';
import { createCard } from '@wingscms/react';
import { getContrastColor } from '@wingscms/crane';
import AnchorButton from '../components/AnchorButton';

import wide from '../styles/wide';

const CTA = styled.div`
  margin: 80px 0;
  ${wide};
  width: 100vw;
  text-align: center;
  .inner {
    background: ${({ theme }) => theme.primaryColor};
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
      color: ${({ theme }) =>
    getContrastColor({
      backgroundColor: theme.primaryColor || '#ffffff',
      colors: { light: theme.textColor, dark: theme.textColorDark },
      threshold: theme.contrastLuminanceThreshold,
    })};
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
      color: ${({ theme }) =>
    getContrastColor({
      backgroundColor: theme.primaryColor || '#ffffff',
      colors: { light: theme.textColor, dark: theme.textColorDark },
      threshold: theme.contrastLuminanceThreshold,
    })};
      text-align: left;
      margin: 0;
      padding: 0 10px;
      font-size: 20px;
    }
  }
  @media screen and (max-width: 800px) {
    margin-top: 40px;
    margin-bottom: 40px;
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

const CTAButton = styled(AnchorButton)`
  font-size: 20px;
  background-color: ${({ theme }) => theme.backgroundColorDark};
  background-image: none;
  color: ${({ theme }) => theme.textColorDark};
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
  padding: 20px 40px;
  border-radius: 3px;
  display: block;
  margin-left: auto;
  cursor: pointer;
  position: relative;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.15s linear;
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.iconColorHover};
  }
  @media screen and (max-width: 800px) {
    margin-right: auto;
    padding: 10px 20px;
    width: 100%;
  }
`;

class CTACardView extends Component {
  render() {
    const { title, text, actionText, actionUrl } = this.props;
    return (
      <CTA>
        <div className="inner">
          <h2>{title}</h2>
          <p>{text}</p>
          <div>
            <CTAButton href={actionUrl}>{actionText}</CTAButton>
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
