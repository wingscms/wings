/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import Scroll from 'react-scroll-to-element';
import styled from 'styled-components';
import { toggleSlideMenu } from '@wingscms/crane';

const ChapterItem = styled.div`
  display: block;
  height: initial;
  line-height: 1.2;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  margin: 0;
  padding: 10px;
  cursor: pointer;
  a {
    color: #333;
    text-decoration: none;
    text-transform: ${({ theme }) => (theme.uppercaseTitles ? 'uppercase' : 'none')};
    background-image: ${({ theme }) =>
    `linear-gradient(120deg, ${theme.primaryColor} 0%, ${theme.primaryColor} 100%)`} !important;
    font-family: ${({ theme }) => theme.headerFontFamily};
    background-repeat: no-repeat;
    background-size: 0% 4px;
    background-position: 0% 90%;
    transition: background-size 0.1s linear;
    &:hover,
    &:focus {
      background-size: 100% 4px;
    }
    img {
      margin-left: 10px;
    }
  }
  &.special {
    a {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
  &:hover,
  &:active {
    ul {
      display: block;
    }
  }
`;

export default ({ chapters }) => (
  <div>
    {chapters.map((chapter, i) => (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        key={`chapter-item-${chapter.id}`}
        onClick={() =>
          toggleSlideMenu(
            document.getElementById('content-wrapper').classList.contains('chaptersOpen'),
            'content-wrapper',
            'chaptersOpen',
            false,
          )}
      >
        <Scroll type="id" element={chapter.id}>
          <ChapterItem index={i}>
            <a href="">{`${i + 1}. ${chapter.title}`}</a>
          </ChapterItem>
        </Scroll>
      </div>
    ))}
  </div>
);
