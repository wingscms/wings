import styled from 'styled-components';

export default styled.h1`
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.landingSectionTitleColor};
  text-transform: ${({ theme }) => (theme.uppercaseTitles ? 'uppercase' : 'none')};
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
  ${({ theme }) =>
    theme.landingSectionTitleBackgroundColor
      ? `
  line-height: 1.4;
  span {
    background: ${theme.landingSectionTitleBackgroundColor};
    line-height: 1.4;
    padding: 0 0.25em;
    box-decoration-break: clone;
  }
  `
      : null};
`;
