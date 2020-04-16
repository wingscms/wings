import styled from 'styled-components';
import { t } from '../../../theme';

export default styled('p')`
  color: ${t(_ => _.landingSectionSubtitleColor)};
  font-family: ${t(_ => _.headerFontFamily)};
  font-weight: bold;
  text-transform: ${t(_ => _.uppercaseTitles)};
  font-size: 21px;
  margin: 1em auto 0;
  max-width: 95%;
  letter-spacing: 1px;
  @media screen and (min-width: 800px) {
    font-size: 30px;
  }
  ${t(_ =>
    !_.landingSectionSubtitleBackgroundColor
      ? null
      : `
  line-height: 1.4;
  span {
    background: ${_.landingSectionSubtitleBackgroundColor};
    line-height: 1.4;
    padding: 0 0.25em;
    box-decoration-break: clone;
  }
  `,
  )};
`;
