import React from 'react';
import styled from 'styled-components';
import { t, useTheme } from '@wingscms/components';

const WebfontLoader = ({ children, config }) => {
  if (typeof window !== 'undefined' && config) {
    const WebFont = require('webfontloader');
    WebFont.load(config);
  }
  return children;
};

const WebfontWrap = ({ children }) => {
  const _ = useTheme();
  return (
    <WebfontLoader config={_.webFontConfig && JSON.parse(_.webFontConfig)}>
      {children}
    </WebfontLoader>
  );
};

const ContentWrapper = styled.div`
  background-color: ${t(_ => _.backgroundColor)};
  margin: 0 auto;
  margin-top: 2em;
  max-width: 760px;
  min-height: 100vh;
  padding: 0 20px;
  @media screen and (min-width: 800px) {
    margin-top: 3em;
  }
`;

const PaddingWrap = styled.div`
  background-color: ${t(_ => _.backgroundColor)};
  padding: 1rem;
  min-height: 100vh;
`;

const BackgroundWrap = styled.div`
  background-color: ${t(_ => _.backgroundColor)};
  min-height: 100vh;
`;

export const contentWrap = elem => (
  <WebfontWrap>
    <ContentWrapper>{elem}</ContentWrapper>
  </WebfontWrap>
);

export const paddingWrap = elem => (
  <WebfontWrap>
    <PaddingWrap>{elem}</PaddingWrap>
  </WebfontWrap>
);

export const backgroundWrap = elem => (
  <WebfontWrap>
    <BackgroundWrap>{elem}</BackgroundWrap>
  </WebfontWrap>
);

export const image = (width = 800, height = 600) => `https://picsum.photos/${width}/${height}`;

export const mobiledocWithText = text =>
  JSON.stringify({
    version: '0.3.0',
    atoms: [],
    cards: [],
    markups: [],
    sections: [[1, 'p', [[0, [], 0, text]]]],
  });
