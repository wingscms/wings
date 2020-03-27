import styled from 'styled-components';

export default styled.div`
  padding: 20px 20px 0;
  color: ${({ theme }) => theme.footerTextColor};
  text-align: left;
  font-size: 16px;
  line-height: 1.5;
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: ${({ theme }) => (theme.uppercaseTitles ? 'uppercase' : 'none')};
  }
  a.footerLink {
    color: ${({ theme }) => theme.footerTextColor};
    text-decoration: none;
    background-image: none;
    &:hover {
      color: ${({ theme }) => theme.footerTextColor};
      text-decoration: underline;
    }
  }
  @media screen and (min-width: 800px) {
    padding: 20px;
  }
`;
