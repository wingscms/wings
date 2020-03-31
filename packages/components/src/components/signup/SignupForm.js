import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, CheckboxInput } from '../form';
import { insertLink } from '../../lib/utils';

export default class SignupForm extends Component {
  static propTypes = {
    /** Label for First Name field */
    firstNameFieldLabel: PropTypes.string,
    /** First Name field `name` HTML attribute */
    firstNameFieldName: PropTypes.string,
    /** Label for Last Name field */
    lastNameFieldLabel: PropTypes.string,
    /** Last Name field `name` HTML attribute */
    lastNameFieldName: PropTypes.string,
    /** Label for Email address field */
    emailFieldLabel: PropTypes.string,
    /** Email field `name` HTML attribute */
    emailFieldName: PropTypes.string,
    /** Title for Newsletter Checkbox */
    newsletterCheckboxTitle: PropTypes.string,
    /** Label for Newsletter Checkbox */
    newsletterCheckboxLabel: PropTypes.string,
    /** Title for Privacy Checkbox */
    privacyCheckboxTitle: PropTypes.string,
    /** Label for Privacy Checkbox */
    privacyCheckboxLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /** Link for Privacy Checkbox */
    privacyCheckboxLink: PropTypes.string,
    /** Label for Submit Button */
    buttonLabel: PropTypes.string,
    /** Button `name` HTML attribute */
    buttonName: PropTypes.string,
  };

  static defaultProps = {
    firstNameFieldLabel: 'First Name',
    firstNameFieldName: 'firstname',
    lastNameFieldLabel: 'Last Name',
    lastNameFieldName: 'lastname',
    emailFieldLabel: 'Email address',
    emailFieldName: 'email',
    buttonLabel: 'Sign me up!',
    buttonName: 'submit',
    newsletterCheckboxTitle: 'Stay up to date!',
    newsletterCheckboxLabel:
      'Please send me mails about the Crane campaign. You may use my personal data for this.',
    privacyCheckboxTitle: '',
    privacyCheckboxLabel: {
      start: 'I consent to the ',
      link: 'privacy policy',
      end: ' of Crane',
    },
    privacyCheckboxLink: 'https://example.com',
  };
  render() {
    const {
      firstNameFieldLabel,
      firstNameFieldName,
      lastNameFieldLabel,
      lastNameFieldName,
      emailFieldLabel,
      emailFieldName,
      newsletterCheckboxTitle,
      newsletterCheckboxLabel,
      privacyCheckboxTitle,
      privacyCheckboxLabel,
      privacyCheckboxLink,
      buttonLabel,
      buttonName,
      children,
      ...props
    } = this.props;

    const linkedPrivacyLabel = insertLink(privacyCheckboxLabel, privacyCheckboxLink);

    return (
      <form {...props}>
        <TextInput name={firstNameFieldName} labelText={firstNameFieldLabel} type="text" required />
        <TextInput name={lastNameFieldName} labelText={lastNameFieldLabel} type="text" required />
        <TextInput name={emailFieldName} labelText={emailFieldLabel} type="email" required />
        <CheckboxInput
          name="newsletter"
          titleText={newsletterCheckboxTitle}
          labelText={newsletterCheckboxLabel}
        />
        <CheckboxInput
          name="privacy"
          titleText={privacyCheckboxTitle}
          labelText={linkedPrivacyLabel}
          required
        />
        <button type="submit" name={buttonName}>
          {buttonLabel}
        </button>
        {children}
      </form>
    );
  }
}
