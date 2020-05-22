import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin: 0 auto;
  margin-top: 2em;
  max-width: 760px;
  padding: 0 20px;
  @media screen and (min-width: 800px) {
    margin-top: 3em;
  }
`;

export const contentWrap = elem => <ContentWrapper>{elem}</ContentWrapper>;

export const paddingWrap = elem => <div style={{ padding: '1rem' }}>{elem}</div>;

export const image = (width = 800, height = 600) => `https://picsum.photos/${width}/${height}`;

export const mobiledocWithText = text =>
  JSON.stringify({
    version: '0.3.0',
    atoms: [],
    cards: [],
    markups: [],
    sections: [[1, 'p', [[0, [], 0, text]]]],
  });
