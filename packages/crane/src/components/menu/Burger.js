import React from 'react';
import styled from '../../lib/styled';

const StyledBurger = styled.div`
  .hamburger {
    padding: 14px 14px;
    display: inline-block;
    cursor: pointer;

    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;

    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;

    &:hover {
      opacity: 0.7;
    }
    &:focus {
      outline: none;
    }
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: 2px;

    &,
    &::before,
    &::after {
      width: 30px;
      height: 4px;
      background-color: ${({ color }) => color};
      border-radius: 4px;
      position: absolute;
      transform: all 0.2s linear;
    }

    &::before,
    &::after {
      content: '';
      display: block;
    }

    &::before {
      top: 10px;
    }

    &::after {
      bottom: 10px;
    }
  }
  .hamburger--boring {
    .hamburger-inner {
      &,
      &::before,
      &::after {
        transition-property: none;
      }
    }

    &.is-active {
      .hamburger-inner {
        transform: rotate(45deg);

        &::before {
          top: 0;
          opacity: 0;
        }

        &::after {
          bottom: 0;
          transform: rotate(-90deg);
        }
        &,
        &::before,
        &::after {
          background-color: ${({ activeColor }) => activeColor};
        }
      }
    }
  }
  .hamburger--squeeze {
    .hamburger-inner {
      transition-duration: 0.075s;
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

      &::before {
        transition: top 0.075s 0.12s ease, opacity 0.075s ease;
      }

      &::after {
        transition: bottom 0.075s 0.12s ease,
          transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
    }

    &.is-active {
      .hamburger-inner {
        transform: rotate(45deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

        &::before {
          top: 0;
          opacity: 0;
          transition: top 0.075s ease, opacity 0.075s 0.12s ease;
        }

        &::after {
          bottom: 0;
          transform: rotate(-90deg);
          transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        &,
        &::before,
        &::after {
          background-color: ${({ activeColor }) => activeColor};
        }
      }
    }
  }
  .hamburger--spin {
    .hamburger-inner {
      transition-duration: 0.22s;
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

      &::before {
        transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
      }

      &::after {
        transition: bottom 0.1s 0.25s ease-in,
          transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
    }

    &.is-active {
      .hamburger-inner {
        transform: rotate(225deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

        &::before {
          top: 0;
          opacity: 0;
          transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
        }

        &::after {
          bottom: 0;
          transform: rotate(-90deg);
          transition: bottom 0.1s ease-out,
            transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        &,
        &::before,
        &::after {
          background-color: ${({ activeColor }) => activeColor};
        }
      }
    }
  }
`;

export default ({
  active,
  activeColor = '#000000',
  color = '#000000',
  hoverColor,
  type = 'boring',
  ...props
}) => (
    <StyledBurger activeColor={activeColor} color={color} hoverColor={hoverColor}>
      <button
        className={`hamburger hamburger--${type} ${active ? 'is-active' : ''}`}
        type="button"
        {...props}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    </StyledBurger>
  );
