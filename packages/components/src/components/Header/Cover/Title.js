import styled from 'styled-components';
import { t } from '../../../theme';

export default styled.h1`
  letter-spacing: 1.5px;
  font-family: ${t(_ => _.headerFontFamily)};
  color: ${t(_ => _.landingSectionTitleColor)};
  text-transform: ${t(_ => _.uppercaseTitles)};
  display: inline-block;
  font-size: 32px;
  line-height: 1.2;
  text-align: center;
  margin: 0 auto;
  max-width: 95%;
  position: relative;
  z-index: 2;
  @media screen and (min-width: 800px) {
    font-size: 60px;
    line-height: 1.166666;
    max-width: 1000px;
  }
  ${t(_ =>
    !_.landingSectionTitleBackgroundColor
      ? null
      : `
  line-height: 1.4;
  span {
    background: ${_.landingSectionTitleBackgroundColor};
    line-height: 1.4;
    padding: 0 0.25em;
    box-decoration-break: clone;
  }
  `,
  )};
`;
