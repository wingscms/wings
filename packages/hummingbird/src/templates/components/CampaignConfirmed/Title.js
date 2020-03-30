import styled from 'styled-components';

export default styled.h1`
  font-size: 3em;
  text-transform: ${({ theme }) => (theme.uppercaseTitles ? 'uppercase' : 'none')};
  @media screen and (max-width: 800px) {
    font-size: 2em;
  }
`;
