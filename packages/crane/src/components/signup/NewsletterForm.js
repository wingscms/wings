/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, CheckboxInput } from '../form';

export default class SignupForm extends Component {
  static propTypes = {
    /** Label for Email address field */
    emailFieldLabel: PropTypes.string,
    /** Email field `name` HTML attribute */
    emailFieldName: PropTypes.string,
    /** Label for Submit Button */
    buttonLabel: PropTypes.string,
    /** Button `name` HTML attribute */
    buttonName: PropTypes.string,
  };

  static defaultProps = {
    emailFieldLabel: 'Email address',
    emailFieldName: 'email',
    buttonLabel: 'Sign me up!',
    buttonName: 'submit',
  };

  render() {
    const {
      emailFieldLabel,
      emailFieldName,
      buttonLabel,
      buttonName,
      linkedPrivacyMessage,
      placeholderText,
      privacyCheckbox,
      actionNetworkHelper,
      children,
      disabled,
      ...props
    } = this.props;

    return (
      <form {...props}>
        <TextInput
          name={emailFieldName}
          labelText={emailFieldLabel}
          placeholder={placeholderText}
          disabled={disabled}
          type="email"
          required
        />
        {actionNetworkHelper ? null : privacyCheckbox ? (
          <CheckboxInput name="privacy" labelText={linkedPrivacyMessage} required />
        ) : (
          <small>{linkedPrivacyMessage}</small>
        )}
        <button disabled={disabled} type="submit" name={buttonName}>
          {buttonLabel}
        </button>
        {children}
      </form>
    );
  }
}
