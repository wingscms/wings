import React, { Component } from 'react';
import styled from 'styled-components';
import { TextInput, Select } from '@hummingbird/design';
import { push } from 'gatsby-link';
import AnchorButton from '../AnchorButton';
import wings from '../../data/wings';

const query = `
  mutation EventSignUp($id: String!, $input: EventSignUpInput!) {
    signUpForEvent(id: $id, input: $input) {
      id
    }
  }
`;

const Warning = styled.p`
  margin-top: 20px;
  font-size: 15px;
  color: #b33a3a;
  border: 2px solid #b33a3a;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: #f9ecec;
`;

const CTAButton = styled(AnchorButton)`
  background-color: #000;
  color: #fff;
  margin-top: 40px;
  width: auto;
  &:after {
    display: none;
  }
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryColor};
  }
  @media screen and (max-width: 800px) {
    font-size: 22px;
  }
`;

const Form = styled.form`
  margin-bottom: 0;
`;

export default class EventForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    newsletter: this.props.newsletterOptions
      ? this.props.newsletterOptions.split('|')[0]
      : 'Take a pick',
    terms: true,
    attempted: false,
    newsletterOptions: this.props.newsletterOptions
      ? this.props.newsletterOptions.split('|')
      : ['Take a pick', 'Send me updates', 'Do not send me updates'],
  };

  componentWillReceiveProps(props) {
    if (props.newsletterOptions) {
      this.setState({
        newsletterOptions: props.newsletterOptions
          ? props.newsletterOptions.split('|')
          : ['Take a pick', 'Send me updates', 'Do not send me updates'],
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.newsletter === this.state.newsletterOptions[0]) {
      this.setState({ attempted: true });
      return;
    }
    wings
      .query(query, {
        id: this.props.eventId,
        input: {
          data: JSON.stringify({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            newsletter: this.state.newsletter === this.state.newsletterOptions[1],
            terms: this.state.terms,
            privacyConsent: true,
          }),
          redirectUrl: this.props.eventSlug
            ? `${window.location.origin}/${this.props.eventSlug}/confirmed`
            : `${window.location.href}/confirmed`,
        },
      })
      .then((res) => {
        if (res && res.signUpForEvent && res.signUpForEvent.id) {
          push(
            this.props.eventSlug
              ? `${this.props.eventSlug}/confirm`
              : `${window.location.pathname}/confirm`,
          );
        } else this.props.onError();
      });
  };

  handleChange = (field, eventField = 'value') => (v) => {
    this.setState({ [field]: v.target ? v.target[eventField] : v });
  };

  render() {
    const { firstName, lastName, email, attempted, newsletter, newsletterOptions } = this.state;
    const {
      firstNameLabel,
      firstNamePlaceholder,
      lastNameLabel,
      lastNamePlaceholder,
      emailLabel,
      emailPlaceholder,
      newsletterLabel,
      newsletterNotice,
      newsletterWarning,
    } = this.props;

    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit} id="signupform">
        <TextInput
          id="first-name-input"
          name="firstName"
          label={firstNameLabel || 'First Name'}
          placeholder={firstNamePlaceholder || ''}
          autoComplete="nope"
          required
          onChange={this.handleChange('firstName')}
          value={firstName}
        />
        <TextInput
          id="last-name-input"
          name="lastName"
          label={lastNameLabel || 'Last Name'}
          placeholder={lastNamePlaceholder || ''}
          autoComplete="nope"
          required
          onChange={this.handleChange('lastName')}
          value={lastName}
        />
        <TextInput
          id="email-input"
          name="email"
          label={emailLabel || 'Email Address'}
          placeholder={emailPlaceholder || ''}
          autoComplete="nope"
          required
          onChange={this.handleChange('email')}
          value={email}
        />
        <hr style={{ margin: '8px 0' }} />
        <span style={{ fontSize: '15px' }}>{newsletterLabel || 'Can we keep you updated?'}</span>
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Select
            options={newsletterOptions}
            name="newsletter"
            onChange={this.handleChange('newsletter')}
            value={newsletter}
          />
        </div>
        <p style={{ fontSize: '15px', margin: 0 }}>
          {newsletterNotice || 'Note: you can unsubscribe at any time.'}
        </p>
        <CTAButton onClick={this.handleSubmit}>{this.props.buttonText}</CTAButton>
        {attempted && newsletter === newsletterOptions[0] ? (
          <Warning>
            {newsletterWarning ||
              'Please make a selection regarding your subscription preferences.'}
          </Warning>
        ) : null}
      </Form>
    );
  }
}
