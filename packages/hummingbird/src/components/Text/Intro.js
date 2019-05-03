import styled from 'styled-components';

const Intro = styled.div`
  color: black;
  width: 100vw;
  max-width: 1100px;
  margin: 2rem auto;
  transform: translateX(-50%);
  margin-left: 50%;
  padding: 0 20px;
  line-height: ${({ theme }) => theme.lineHeightIntro};
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeightIntro};
  font-size: ${({ theme }) => theme.fontSizeIntro * 16}px;
  @media screen and (min-width: 600px) {
    font-size: ${({ theme }) => theme.fontSizeIntro * 18}px;
  }
  @media screen and (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSizeIntro * 23}px;
  }
  .petition &,
  .event & {
    max-width: 100%;
    padding: 0;
  }
`;

export default Intro;
