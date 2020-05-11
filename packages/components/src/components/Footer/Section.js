import styled from 'styled-components';
import { t } from '../../theme';

export default styled.div`
  padding: ${t(_ => `${_.smallSpacing} ${_.smallSpacing} 0`)};
  color: inherit;
  text-align: left;
  font-size: 16px;
  line-height: 1.2;
  width: 20%;
  max-width: 20%;
  min-width: 20%;
  flex-basis: auto;
  @media screen and (max-width: 1080px) {
    width: 50%;
    max-width: 50%;
    min-width: 50%;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
  @media screen and (min-width: 800px) {
    padding: ${t(_ => _.smallSpacing)};
  }
  .title {
    font-family: ${t(_ => _.headerFontFamily)};
    text-transform: ${t(_ => _.uppercaseTitles)};
    font-size: 20px;
    font-weight: bold;
    margin-bottom: ${t(_ => _.smallSpacing)};
  }
  a.footerLink {
    color: inherit;
    text-decoration: none;
    background-image: none;
    &:hover {
      color: inherit;
      text-decoration: underline;
    }
  }
`;
