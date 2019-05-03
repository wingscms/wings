import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll-to-element';

const ChapterList = styled.ul`
  display: block;
  max-width: 700px;
  margin: 0 auto;
  line-height: 55px;
  padding: 100px 0;
  background-color: ${({ theme }) => theme.primaryColor};
  position: relative;
  &:before {
    position: absolute;
    content: '';
    height: 100%;
    width: 200vw;
    left: -100vw;
    top: 0;
    background-color: ${({ theme }) => theme.appBackgroundColor};
  }
  @media screen and (max-width: 800px) {
    padding: 20px 0 20px 0;
    &:before {
      height: calc(100%);
    }
  }
`;

const ChapterItem = styled.li`
  display: block;
  width: 100%;
  padding: 0;
  list-style-type: none;
  margin: 40px 0;
  position: relative;
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  color: ${({ theme }) => theme.textColor};
  font-size: 42px;
  line-height: 55px;
  text-align: center;
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
  font-weight: ${({ theme }) => theme.typography.headerFontWeight || 'bold'};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
    position: relative;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    background-image: none;
  }
  &:before {
    content: '${props => props.index + 1}';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.primaryColor};
    opacity: 0.3;
    font-size: 90px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
  }
  &:hover,
  &:active {
    &:before {
      font-size: 100px;
      color: ${({ theme }) => theme.primaryColor};
      opacity: 1;
    }
  }
  @media screen and (max-width: 800px) {
    font-size: 24px;
    line-height: 35px;
    margin: 20px 0;
    &:before {
      font-size: 40px;
    }
    &:hover,
    &:active {
      &:before {
        font-size: 60px;
      }
    }
  }
`;

export default ({ chapters }) => (
  <ChapterList id="chapter-list">
    {chapters.map((chapter, i) => (
      <Scroll type="id" element={chapter.id} key={`chapter-item-${chapter.id}`}>
        <ChapterItem index={i}>
          <a href="">{chapter.title}</a>
        </ChapterItem>
      </Scroll>
    ))}
  </ChapterList>
);
