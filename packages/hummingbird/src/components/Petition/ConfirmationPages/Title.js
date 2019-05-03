import styled from 'styled-components';

export default styled.h1`
  text-align: center;
  font-size: 56px;
  line-height: 60px;
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
  font-weight: bold;
  margin: 40px 0;
  @media screen and (max-width: 800px) {
    font-size: 28px;
    line-height: 33px;
    margin: 20px 0;
  }
`;
