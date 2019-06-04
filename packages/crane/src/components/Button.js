import styled, { css } from 'styled-components';
import { getTextColor } from '../lib/utils';

const outline = css`
  border: 2px solid ${({ theme }) => theme.colorPrimary};
  padding: 14px 38px;
  background-color: transparent;
  color: ${({ theme }) => theme.colorPrimary};
  &:hover {
    /* background-color: ${({ theme }) => theme.colorPrimary}; */
  }
`;

const intentPrimary = css`
  background-color: ${({ theme }) => theme.colorPrimary};
  color: ${({ theme }) => getTextColor({ backgroundColor: theme.colorPrimary, theme })};
`;

const intentSuccess = css`
  background-color: ${({ theme }) => theme.colorSuccess};
  color: ${({ theme }) => getTextColor({ backgroundColor: theme.colorSuccess, theme })};
`;

const intentWarning = css`
  background-color: ${({ theme }) => theme.colorWarning};
  color: ${({ theme }) => getTextColor({ backgroundColor: theme.colorWarning, theme })};
`;

const intentDanger = css`
  background-color: ${({ theme }) => theme.colorDanger};
  color: ${({ theme }) => getTextColor({ backgroundColor: theme.colorDanger, theme })};
`;

const small = css`
  font-size: 16px;
  padding: 10px 20px;
`;

export default styled.button`
  text-decoration: none;
  background-image: none;
  /* color: ${({ theme }) => theme.colorSecondary}; */
  font-size: 1rem;
  padding: 16px 40px;
  border: 0;
  cursor: pointer;
  display: block;
  position: relative;
  transition: all 0.15s ease-in-out;
  &:hover,
  &:active {
    opacity: 0.8;
    background-image: none;
    text-decoration: none;
  }
  &:active {
    transform: translateY(1px);
  }
  @media screen and (min-width: 800px) {
    margin-right: 0;
    display: inline-block;
    width: auto;
  }
  ${({ intent }) => {
    switch (intent) {
      case 'success':
        return intentSuccess;
      case 'warning':
        return intentWarning;
      case 'danger':
        return intentDanger;
      case 'primary':
      default:
        return intentPrimary;
    }
  }}
  ${({ buttonType, type }) => {
    switch (buttonType || type) {
      case 'outline':
        return outline;
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
