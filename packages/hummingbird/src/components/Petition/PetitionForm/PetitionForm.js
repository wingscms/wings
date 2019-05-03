/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import styled from 'styled-components';
import { push } from 'gatsby-link';
import { TextInput, Select, ConfirmationBox } from '@wingscms/crane';
import AnchorButton from '../../AnchorButton';
import wings from '../../../data/wings';

const query = `
  mutation SignPetition($id: String!, $input: SignPetitionInput!) {
    signPetition(id: $id, input: $input) {
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

const CTAText = styled.div`
  font-size: 34px;
  line-height: 40px;
  font-family: ${({ theme }) => theme.typography.options.headerFontFamily.join(', ')};
  font-weight: bold;
  padding-bottom: 1.5rem;
  > label {
    font-weight: 300 !important;
  }
  @media screen and (max-width: 800px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

const CTAButton = styled(AnchorButton)`
  background-color: #000;
  color: #fff;
  margin-top: 40px;
  &:after {
    display: none;
  }
  @media screen and (max-width: 800px) {
    font-size: 22px;
  }
`;

const Form = styled.form`
  margin-bottom: 0;
  position: relative;
`;

export default class PetitionForm extends Component {
  state = {
    newsletterOptions: this.props.newsletterOptions
      ? this.props.newsletterOptions.split('|')
      : ['Take a pick', 'Send me updates', 'Do not send me updates'],
    actionNetworkHelper: this.props.actionNetworkHelper,
    firstName: '',
    lastName: '',
    email: '',
    privacyConsent: false,
    newsletter: this.props.newsletterOptions
      ? this.props.newsletterOptions.split('|')[0]
      : 'Take a pick',
    terms: true,
    confirmed: false,
    attempted: false,
    error: false,
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
    const actionNetworkHelper = this.state.actionNetworkHelper || this.props.actionNetworkHelper;
    if (this.state.newsletter === this.state.newsletterOptions[0]) {
      this.setState({ attempted: true });
      return;
    }
    if (actionNetworkHelper) {
      fetch(
        `${
          process.env.NODE_ENV === 'development' ? 'http://localhost:9000' : '/.netlify/functions'
        }/actionnetworksubmit`,
        {
          method: 'POST',
          body: JSON.stringify({
            actionNetworkHelper,
            payload: {
              person: {
                family_name: this.state.lastName,
                given_name: this.state.firstName,
                email_addresses: [
                  {
                    primary: true,
                    address: this.state.email,
                    status:
                      this.state.newsletter === this.state.newsletterOptions[1]
                        ? 'subscribed'
                        : 'unsubscribed',
                  },
                ],
                postal_addresses: [
                  {
                    primary: true,
                    country: 'NL',
                    postal_code: this.state.postcode ? this.state.postcode.replace(' ', '') : null,
                  },
                ],
                custom_fields: {
                  Telefoonnummer: this.state.phoneNumber || null,
                },
              },
              triggers: {
                autoresponse: {
                  enabled: true,
                },
              },
              'action_network:referrer_data': {
                source: this.props.source,
                website: document.location.href,
                referrer: document.referrer,
              },
            },
          }),
        },
      )
        .then(res => res)
        .then((res) => {
          if (res.status === 200) {
            push(
              this.props.petitionSlug
                ? `${this.props.petitionSlug}/confirm`
                : `${window.location.pathname}/confirm`,
            );
          } else {
            this.setState({ error: true, attempted: true });
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({ error: true, attempted: true });
        });
    } else {
      wings
        .query(query, {
          id: this.props.petitionId,
          input: {
            data: JSON.stringify({
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email: this.state.email,
              newsletter: this.state.newsletter === this.state.newsletterOptions[1],
              terms: this.state.terms,
              privacyConsent: true,
            }),
            redirectUrl: this.props.petitionSlug
              ? `${window.location.origin}/${this.props.petitionSlug}/confirmed`
              : `${window.location.href}/confirmed`,
          },
        })
        .then((res) => {
          if (res && res.signPetition && res.signPetition.id) {
            push(
              this.props.petitionSlug
                ? `${this.props.petitionSlug}/confirm`
                : `${window.location.pathname}/confirm`,
            );
          } else this.props.onError();
        });
    }
  };

  handleChange = (field, key = 'value') => (v) => {
    this.setState({ [field]: v.target ? v.target[key] : v });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      attempted,
      newsletter,
      error,
      confirmed,
      newsletterOptions,
    } = this.state;
    const {
      firstNameLabel,
      firstNamePlaceholder,
      lastNameLabel,
      lastNamePlaceholder,
      emailLabel,
      emailPlaceholder,
      confirmationText,
      confirmationTitle,
      newsletterLabel,
      newsletterNotice,
      newsletterWarning,
    } = this.props;
    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit} id="signupform">
        {confirmed ? (
          <ConfirmationBox
            confirmationText={confirmationText}
            confirmationTitle={confirmationTitle}
          />
        ) : null}
        <CTAText>{this.props.formTitle || 'Ja, ik teken ook!'}</CTAText>
        <TextInput
          id="input-firstname"
          name="firstName"
          label={firstNameLabel || 'First Name'}
          placeholder={firstNamePlaceholder || ''}
          autoComplete="nope"
          required
          onChange={this.handleChange('firstName')}
          value={firstName}
          disabled={attempted && confirmed}
        />
        <TextInput
          id="input-lastname"
          name="lastName"
          label={lastNameLabel || 'Last Name'}
          placeholder={lastNamePlaceholder || ''}
          autoComplete="nope"
          required
          onChange={this.handleChange('lastName')}
          value={lastName}
          disabled={attempted && confirmed}
        />
        <TextInput
          id="input-email"
          name="email"
          label={emailLabel || 'Email Address'}
          placeholder={emailPlaceholder || ''}
          autoComplete="nope"
          required
          onChange={this.handleChange('email')}
          value={email}
          disabled={attempted && confirmed}
        />
        <hr style={{ margin: '8px 0' }} />
        <p style={{ fontSize: '15px' }}>{newsletterLabel || 'Can we keep you updated?'}</p>
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Select
            options={newsletterOptions}
            name="newsletter"
            onChange={this.handleChange('newsletter')}
            disabled={attempted && confirmed}
            value={newsletter}
          />
        </div>
        <p style={{ fontSize: '15px', margin: 0 }}>
          {newsletterNotice || 'Note: you can unsubscribe at any time.'}
        </p>
        <CTAButton onClick={this.handleSubmit} disabled={attempted && confirmed}>
          {this.props.buttonText}
        </CTAButton>
        {attempted && error ? <Warning>Something went wrong.</Warning> : null}
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
