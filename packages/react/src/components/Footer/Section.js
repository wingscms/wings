import styled from '../../lib/styled';
import { t } from '../../theme';

export default styled.div`
  padding: 20px 20px 0;
  color: inherit;
  text-align: left;
  font-size: 16px;
  line-height: 1.2;
  .title {
    font-family: ${t(_ => _.headerFontFamily)};
    text-transform: ${t(_ => _.uppercaseTitles)};
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
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
  @media screen and (min-width: 800px) {
    padding: 20px;
  }
`;
