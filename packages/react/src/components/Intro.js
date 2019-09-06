import styled, { css } from 'styled-components';

export default styled.div`
  color: black;
  width: 100vw;
  max-width: 1100px;
  margin: 2rem auto;
  transform: translateX(-50%);
  margin-left: 50%;
  padding: 0 20px;
  line-height: ${({ theme }) => theme.introLineHeight};
  text-align: left;
  font-weight: ${({ theme }) => theme.introFontWeight};
  font-size: ${({ theme }) => theme.introFontSize * 16}px;
  @media screen and (min-width: 600px) {
    font-size: ${({ theme }) => theme.introFontSize * 18}px;
  }
  @media screen and (min-width: 800px) {
    font-size: ${({ theme }) => theme.introFontSize * 23}px;
  }

  ${({ fullWidth }) =>
    (!fullWidth
      ? null
      : css`
          max-width: 100%;
          padding: 0;
        `)}
`;
