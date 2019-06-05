import { MenuItem } from '@wingscms/crane';
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
    color: #333;
    text-decoration: none;
    background-image: linear-gradient(
      120deg,
      ${({ theme }) => theme.colorPrimary} 0%,
      ${({ theme }) => theme.colorPrimary} 100%
    ) !important;
    font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
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
      color: ${({ theme }) => theme.colorPrimary};
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
