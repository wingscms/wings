import styled from 'styled-components';

export default styled('p')`
  color: ${({ theme }) => theme.landingSectionSubtitleColor};
  font-family: ${({ theme }) => theme.headerFontFamily};
  font-weight: ${({ theme }) => theme.typography.headerFontWeight};
  text-transform: ${({ theme }) => (theme.uppercaseTitles ? 'uppercase' : 'none')};
  font-size: 21px;
  margin: 1em auto 0;
  max-width: 95%;
  letter-spacing: 1px;
  @media screen and (min-width: 800px) {
    font-size: 30px;
  }
  ${({ theme }) =>
    theme.landingSectionSubtitleBackgroundColor
      ? `
  line-height: 1.4;
  span {
    background: ${theme.landingSectionSubtitleBackgroundColor};
    line-height: 1.4;
    padding: 0 0.25em;
    box-decoration-break: clone;
  }
  `
      : null};
`;
