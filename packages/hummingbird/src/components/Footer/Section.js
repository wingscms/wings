import styled from 'styled-components';

export default styled.div`
  padding: 20px 20px 0;
  color: ${({ theme }) => theme.colorFooterText};
  text-align: left;
  font-size: 16px;
  line-height: 1.5;
  .title {
    font-size: 20px;
    font-weight: bolder;
    margin-bottom: 8px;
  }
  > * + .title {
    margin-top: 1.5em;
  }
  a.footerLink {
    color: ${({ theme }) => theme.colorFooterText};
    text-decoration: none;
    background-image: none;
    &:hover {
      color: ${({ theme }) => theme.colorFooterText};
      text-decoration: underline;
    }
  }
  @media screen and (min-width: 800px) {
    padding: 20px;
  }
`;
