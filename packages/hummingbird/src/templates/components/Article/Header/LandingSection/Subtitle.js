import styled from 'styled-components';

export default styled('p')`
  color: ${({ theme }) => theme.landingSectionSubTitleColor};
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
  font-weight: ${({ theme }) => theme.typography.headerFontWeight};
  text-transform: uppercase;
  font-size: 21px;
  margin: 1em auto 0;
  max-width: 95%;
  letter-spacing: 1px;
  @media screen and (min-width: 800px) {
    font-size: 30px;
  }
  ${({ theme }) =>
    (theme.landingSectionSubTitleBackgroundColor
      ? `
  line-height: 1.4;
  span {
    background: ${theme.landingSectionSubTitleBackgroundColor};
    line-height: 1.4;
    padding: 0 0.25em;
    box-decoration-break: clone;
  }
  `
      : null)};
`;
