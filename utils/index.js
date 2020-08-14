import React from 'react';
import styled from 'styled-components';
import { t } from '@wingscms/components';

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

export const contentWrap = elem => <ContentWrapper>{elem}</ContentWrapper>;

export const paddingWrap = elem => <PaddingWrap>{elem}</PaddingWrap>;

export const backgroundWrap = elem => <BackgroundWrap>{elem}</BackgroundWrap>;

export const image = (width = 800, height = 600) => `https://picsum.photos/${width}/${height}`;

export const mobiledocWithText = text =>
  JSON.stringify({
    version: '0.3.0',
    atoms: [],
    cards: [],
    markups: [],
    sections: [[1, 'p', [[0, [], 0, text]]]],
  });
