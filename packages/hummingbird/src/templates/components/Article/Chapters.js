import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll-to-element';

const ChapterList = styled.ul`
  display: block;
  max-width: 700px;
  margin: 0 auto 0 auto;
  line-height: 55px;
  padding: 100px 0;
  position: relative;
  &:before {
    position: absolute;
    content: '';
    height: 100%;
    width: 200vw;
    left: -100vw;
    top: 0;
    background-color: ${({ theme }) => theme.chapterSelectBackgroundColor};
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
  color: ${({ theme }) => theme.chapterSelectItemColor};
  font-size: 42px;
  line-height: 55px;
  text-align: center;
  font-family: ${({ theme }) => theme.headerFontFamily};
  font-weight: ${({ theme }) => theme.typography.headerFontWeight || 'bold'};
  text-transform: ${({ theme }) => (theme.uppercaseTitles ? 'uppercase' : 'none')};
  span {
    text-decoration: none;
    color: ${({ theme }) => theme.chapterSelectItemColor};
    position: relative;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    background-image: none;
    cursor: pointer;
  }
  &:before {
    content: '${props => props.marker}';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.chapterSelectItemNumberColor};
    opacity: 0.3;
    font-size: 90px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
  }
  &:hover,
  &:active {
    &:before {
      font-size: 100px;
      color: ${({ theme }) => theme.chapterSelectItemNumberColor};
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

export default ({ chapters: _chapters }) => {
  const chapters = _chapters.filter(c => c.displayArticleTop);
  return !chapters.length ? null : (
    <ChapterList>
      {chapters.map(({ id, marker, title }) => (
        <Scroll type="id" element={id} key={`chapter-item-${id}`}>
          <ChapterItem marker={marker}>
            <span>{title}</span>
          </ChapterItem>
        </Scroll>
      ))}
    </ChapterList>
  );
};
