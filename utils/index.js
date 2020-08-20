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
  max-width: 760px;
  min-height: 100vh;
`;

const PaddingWrap = styled.div`
  background-color: ${t(_ => _.backgroundColor)};
  padding: 1rem;
  min-height: 100vh;
`;

const BackgroundWrap = styled.div`
  overflow: auto;
  background-color: ${t(_ => _.backgroundColor)};
  min-height: 100vh;
`;

export const contentWrap = elem => (
  <WebfontWrap>
    <BackgroundWrap>
      <ContentWrapper>{elem}</ContentWrapper>
    </BackgroundWrap>
  </WebfontWrap>
);

export const paddingWrap = elem => (
  <WebfontWrap>
    <BackgroundWrap>
      <PaddingWrap>{elem}</PaddingWrap>
    </BackgroundWrap>
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
