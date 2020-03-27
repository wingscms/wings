import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  padding: 0;
  position: relative;
  text-align: center;
  margin-top: ${({ theme }) => theme.mediumSpacing};
  @media screen and (min-width: 800px) {
    margin-top: ${({ theme }) => theme.largeSpacing};
  }
`;

const Title = styled.h1`
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.textColor};
  text-transform: ${({ theme }) => (theme.uppercaseTitles ? 'uppercase' : 'none')};
  display: inline-block;
  font-size: 32px;
  line-height: 1.2;
  text-align: center;
  margin: 0 auto 0 auto;
  max-width: 90%;
  position: relative;
  z-index: 2;
  @media screen and (min-width: 800px) {
    font-size: 60px;
  }
  @media screen and (min-width: 960px) {
    width: 920px;
  }
`;

export default ({ article }) => {
  const { title } = article;
  return (
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
  );
};
