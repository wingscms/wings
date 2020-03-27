import { MenuItem, getContrastColor } from '@wingscms/crane';
import styled from 'styled-components';

export default styled(MenuItem)`
  display: block;
  height: 50px;
  line-height: 50px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  margin: 0;
  padding: 0;
  cursor: pointer;
  a {
    color: ${({ theme }) =>
      getContrastColor({
        backgroundColor: theme.navigationMenuBackgroundColor || '#ffffff',
        colors: { light: theme.textColor, dark: theme.textColorDark },
        threshold: theme.contrastLuminanceThreshold,
      })};
    text-decoration: none;
    background-image: linear-gradient(
      120deg,
      ${({ theme }) => theme.primaryColor} 0%,
      ${({ theme }) => theme.primaryColor} 100%
    ) !important;
    font-family: ${({ theme }) => theme.headerFontFamily};
    background-repeat: no-repeat;
    background-size: 0% 4px;
    background-position: 0% 100%;
    transition: background-size 0.1s linear;
    &:hover,
    &:focus {
      background-size: 100% 4px;
    }
    img {
      margin-left: 10px;
    }
  }
  &.special {
    a {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
  &.current {
    a {
      background-size: 100% 4px;
    }
  }
  &:hover,
  &:active {
    ul {
      display: block;
    }
  }
`;
