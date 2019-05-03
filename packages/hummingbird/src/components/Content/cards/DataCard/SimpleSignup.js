import React from 'react';
import styled from 'styled-components';
import { Newsletter, MailchimpForm } from '@hummingbird/design';

const StyledMailchimpForm = styled(MailchimpForm)`
  margin: 80px 0;
  background-color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 40px;
  color: #fff;
  margin-bottom: 0;
  div {
    &.crane-checkbox-input {
      label {
        &:hover {
          color: #000;
        }
      }
    }
    input {
      margin-bottom: 0;
      &[type='checkbox'] {
        vertical-align: text-top;
      }
    }
    margin-bottom: 10px;
  }
  button {
    text-decoration: none;
    background-image: none;
    background-color: #000;
    color: white !important;
    font-size: 24px;
    font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
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
      background-color: #666;
      color: ${({ theme }) => theme.primaryColor};
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
  }
  @media screen and (max-width: 800px) {
    padding: 20px;
    button {
      width: 100%;
    }
  }
`;

const StyledNewsletter = styled(Newsletter)`
  margin: 80px 0;
  background-color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 40px;
  color: #fff;
  form {
    margin-bottom: 0;
    div {
      &.crane-checkbox-input {
        label {
          &:hover {
            color: #000;
          }
        }
      }
      input {
        margin-bottom: 0;
        &[type='checkbox'] {
          vertical-align: text-top;
        }
      }
      margin-bottom: 10px;
    }
    button {
      text-decoration: none;
      background-image: none;
      background-color: #000;
      color: white !important;
      font-size: 24px;
      font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
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
        background-color: #666;
        color: ${({ theme }) => theme.primaryColor};
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
    }
  }
  @media screen and (max-width: 800px) {
    padding: 20px;
    button {
      width: 100%;
    }
  }
`;

export default ({ type, actionNetworkHelper, title, intro, action, privacyMessage, ...props }) =>
  (!actionNetworkHelper && (type === 'mailchimp' || undefined) ? (
    <StyledMailchimpForm
      title={title}
      name={title}
      intro={intro}
      method="POST"
      action={action}
      privacyMessage={privacyMessage}
      {...props}
    />
  ) : (
    <StyledNewsletter
      title={title}
      name={title}
      intro={intro}
      method="POST"
      action={action}
      actionNetworkHelper={actionNetworkHelper}
      privacyMessage={privacyMessage}
      {...props}
    />
  ));
