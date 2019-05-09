import styled, { css } from 'styled-components';

const ghost = css`
  border: 2px solid ${({ theme }) => theme.secondaryColor};
  background-color: transparent;
  color: ${({ theme }) => theme.secondaryColor};
  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
    opacity: 1;
  }
`;

const reverse = css`
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.primaryColor};
  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

const small = css`
  font-size: 16px;
  padding: 10px 20px;
`;

export default styled.button`
  text-decoration: none;
  background-image: none;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 24px;
  font-weight: bold;
  line-height: 1.25;
  padding: 16px 40px;
  border-radius: 3px;
  border: 0;
  cursor: pointer;
  display: block;
  position: relative;
  transition: all 0.15s linear;
  text-align: center;
  margin-right: auto;
  &:after {
    transition: all 0.15s linear;
    height: 3px;
    width: 0%;
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.primaryColor};
    bottom: 0;
    left: 0;
    border-radius: 5px;
  }
  &:hover {
    opacity: 0.8;
    background-image: none;
    text-decoration: none;
  }
  &:active {
    background-color: ${({ theme }) => theme.primaryColor};
    &:after {
      width: 100%;
    }
  }
  &:active {
    top: 1px;
  }
  @media screen and (min-width: 800px) {
    margin-right: 0;
    display: inline-block;
    width: auto;
  }
  ${({ buttonType, type }) => {
    switch (buttonType || type) {
      case 'ghost':
        return ghost;
      case 'reverse':
        return reverse;
      default:
        return '';
    }
  }};
  ${({ size }) => {
    switch (size) {
      case 'small':
        return small;
      default:
        return '';
    }
  }};
  ${({ disabled }) =>
    (!disabled
      ? null
      : css`
          background-color: grey !important;
          pointer-events: none !important;
        `)};
`;
