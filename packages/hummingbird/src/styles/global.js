import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .twitter-tweet {
    margin: 20px auto;
  }
  .mobiledoc-content {
    font-size: 16px;
    @media screen and (min-width: 600px) {
      font-size: 18px;
    } 
    @media screen and (min-width: 800px) {
      font-size: 23px;
    }
    p a,
    ol a,
    ul a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    background-image: linear-gradient(
      120deg,
      ${({ theme }) => theme.primaryColor} 0%,
      ${({ theme }) => theme.primaryColor} 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 2px;
    background-position: 0% 100%;
    transition: background-size 0.1s linear;
    &:hover,
    &:focus {
      background-size: 100% 4px;
      background-image: linear-gradient(120deg, ${({ theme }) => theme.primaryColor} 0%, ${({
  theme,
}) => theme.primaryColor} 100%);
    }
  }
    color: ${({ theme }) => theme.textColor};
    padding-bottom: 40px;
    font-weight: ${({ theme }) => theme.bodyFontWeight};
    > * {
      margin-bottom: 0;
      margin-top: 0;
      & + * {
        margin-top: 1rem;
        @media screen and (min-width: 800px) {
          margin-top: 1.5rem;
        }
      }
      & + h2,
      & + h3 {
        margin-top: 1.5rem;
        @media screen and (min-width: 800px) {
          margin-top: 3rem;
        }
      }
    }
    .Mobiledoc > p:first-child {
      margin-top: 80px;
    }
    &.drop-cap > .Mobiledoc > p:first-child {
      &::first-letter {
        font-weight: ${({ theme }) => theme.firstLetterFontWeight}!important;
        color: ${({ theme }) => theme.primaryColor};
        float: left;
        line-height: ${({ theme }) => theme.firstLetterLineHeight};
        margin: 0.075em 0.1em -0.1em 0;
        font-size: ${({ theme }) => theme.dropcapFontSize};
        font-family: ${({ theme }) => theme.headingFont};
      }
    }
    > ul,
    > ol {
      li {
        margin: 0;
      }
    }

    > blockquote {
      border-left: 2px solid ${({ theme }) => theme.primaryColor};
      margin: 0;
      padding: 0 0 0 1rem;
      color: #000;
    }

    > h2,
    > h3,
    > h4,
    > h5,
    > h6 {
      color: ${({ theme }) => theme.textColor};
      margin-bottom: 5px;
      line-height: 1.2;
      text-transform: none;
      @media screen and (min-width: 800px) {
        margin-bottom: 0;
      }
    }
    &.drop-cap > .Mobiledoc > div.headerContainer + p {
      position: relative;
      &::first-letter {
        font-weight: ${({ theme }) => theme.firstLetterFontWeight}!important;
        color: ${({ theme }) => theme.primaryColor};
        float: left;
        line-height: ${({ theme }) => theme.firstLetterLineHeight};
        margin: 0.075em 0.1em -0.2em 0;
        font-size: ${({ theme }) => theme.dropcapFontSize};
        font-family: ${({ theme }) => theme.headingFont};
      }
    }
    /* PETITION DESCRIPTION OVERRIDES */
    &.petition-description {
      > p:first-child,
      > h1:first-child,
      > h2:first-child,
      > h3:first-child {
        margin-top: 0;
      }
    }
  }
`;
